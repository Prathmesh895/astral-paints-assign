"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';
import Link from 'next/link';

// Utility function to strip HTML tags
const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>/g, ''); // Remove all HTML tags
};

function About() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectHomepageData);
  console.log(data);

  useEffect(() => {
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  // Add a check to make sure homepageData is defined before accessing its properties
  const homepageData = data?.pages?.nodes[0]?.homepage;
  const seoData = data?.pages?.nodes[0]?.seo;

  return (
    <div className='flex lg:flex-row flex-col-reverse justify-between'>
      {/* Ensure homepageData is defined */}
      {homepageData && (
        <>
          <div className='basis-[60%] md:mt-16 mt-10 md:px-32 px-5'>
            <p className='font-semibold text-2xl drop-shadow hidden md:block' data-aos="fade-up">
              {stripHtmlTags(homepageData.homeAboutSubtitle)} {/* Strip HTML tags */}
            </p>
            <h3 className='text-3xl font-bold pb-5 drop-shadow hidden md:block' data-aos="fade-up">
              {stripHtmlTags(homepageData.homeAboutTitle)} {/* Strip HTML tags */}
            </h3>
            <p className='text-gray-600 lg:text-base md:text-sm' data-aos="fade-up">
              {stripHtmlTags(homepageData.homeAboutDescription)} {/* Strip HTML tags */}
            </p>
            <br />

            <Link data-aos="fade-up" href={homepageData.homeAboutButton.url} target={homepageData.homeAboutButton.target}
              className='border-2 border-red-500 text-red-600 font-semibold px-5 py-2 rounded-full mt-20'>
              {homepageData.homeAboutButton.title}
            </Link>
          </div>

          <div className='basis-[40%] lg:px-0 md:px-32'>
            <p className='font-semibold text-2xl drop-shadow mx-3 md:mt-0 mt-5 md:hidden block'>
              {stripHtmlTags(homepageData.homeAboutSubtitle)} {/* Strip HTML tags */}
            </p>
            <h3 className='text-3xl font-bold pb-5 drop-shadow mx-3 md:hidden block'>
              {stripHtmlTags(homepageData.homeAboutTitle)} {/* Strip HTML tags */}
            </h3>
            <Image
              src={homepageData.homeAboutVideoImage?.node?.sourceUrl || '/placeholder-image.png'}
              width={500}
              height={400}
              alt='video-img'
              className='lg:w-[90%] md:w-[100%] pb-5 md:p-0 p-3'
            />
          </div>
        </>
      )}
    </div>
  );
}

export default About;
