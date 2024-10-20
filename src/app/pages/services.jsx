"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';

function Services() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectHomepageData);

  useEffect(() => {
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Add a check to ensure homepageData is defined
  const homepageData = data?.pages?.nodes[0]?.homepage;

  // Return null or a loading state if homepageData is undefined
  if (!homepageData) {
    return <p>No data available</p>; // Handle the case when homepageData is not available
  }

  return (
    <div className='md:px-32 px-5 my-14' data-aos="fade-up">
      <h1 className='font-semibold md:text-2xl text-xl drop-shadow text-gray-800'>
        {homepageData.homeServicesSubtitle}
      </h1>
      
      {/* Title for the category section with an underline image */}
      <div className='font-bold md:text-3xl text-2xl drop-shadow flex items-center md:space-x-3 mb-10'>
        <p>{homepageData.homeServicesTitle}</p>
        <Image
          src='/yellowline.svg'
          width={520}
          height={500}
          alt={`Banner Image`}
          className="h-5 w-60 md:block hidden"
        />
      </div>
    </div>
  );
}

export default Services;
