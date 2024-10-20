// components/Blogs.js
"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector} from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectHomepageData);

  useEffect(() => {
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const homepageData = data?.pages?.nodes[0]?.homepage;
  const blogData = data?.blogs?.nodes || [];
  
  // Assuming banners are part of homepageData
  const banners = homepageData?.banners || [];

  return (
    <div className="w-full overflow-hidden relative">
      <div>
        {/* carousel for home page images */}
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          interval={2000}
          className="relative"
        >
          {banners.map((banner, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={banner.bannerImage.node.sourceUrl}
                width={1520}
                height={500}
                alt={`Banner Image ${index}`}
                className="md:w-[100%] md:h-[800px] h-[700px] md:object-fill w-full object-cover"
              />
              <div
                data-aos="fade-up"
                className="lg:top-[270px] md:top-[540px] bottom-32 z-10 absolute md:float-start flex flex-col items-start text-start text-white p-2 md:mx-20 space-y-3"
              >
                <p className="md:text-5xl text-4xl font-semibold drop-shadow-xl shadow-blue-700">
                  {banner.bannersTitle}
                </p>
                <p>{banner.bannerDescription}</p>
                <button className="bg-white font-semibold text-sm text-black rounded-full px-4 py-1.5">
                  <Link href={banner.bannerButton.url} target={banner.bannerButton.target}>
                    {banner.bannerButton.title}
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
