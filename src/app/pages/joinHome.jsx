"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';
import Link from 'next/link'; 

const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>/g, ''); // Remove all HTML tags
};

function JionHome() {
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector(selectHomepageData);

  useEffect(() => {
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (error) return <p>Error: {error}</p>;

  // Add a check to ensure homepageData is defined
  const homepageData = data?.pages?.nodes[0]?.homepage;

  // Return null or a loading state if homepageData is undefined
  if (!homepageData) {
    return <p>No data available</p>; // Handle the case when homepageData is not available
  }

  return (
    <div className='my-14 relative'>
      <Image
        src={homepageData.homeJoinBackgroundImage.node.sourceUrl}
        width={1600}
        height={500}
        alt={homepageData.homeJoinTitle}
        className='-z-10 w-full lg:h-full md:h-[300px] h-[340px]'
      />
      <div className='absolute lg:top-1/4 md:top-[20%] top-10 space-y-2 lg:px-[400px] px-10 text-center text-white' data-aos="fade-up">
        <h1>{stripHtmlTags(homepageData.homeJoinSubtitle)}</h1>
        <h1 className='text-3xl font-bold'>{stripHtmlTags(homepageData.homeJoinTitle)}</h1>
        <h1>{stripHtmlTags(homepageData.homeJoinDescription)}</h1>
        <Link href='#' className="text-black bg-white rounded-full mt-1 py-2 px-5 font-semibold md:text-sm">
          <button className='mt-5'>Read More</button>
        </Link>
      </div>
    </div>
  );
}

export default JionHome;
