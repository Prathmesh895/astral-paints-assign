"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';

function Category() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectHomepageData);

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
    <div className='md:px-32 px-5 my-10'>
      <h1 data-aos="fade-up" className='font-semibold text-2xl drop-shadow text-gray-800'>
        {homepageData?.homeCategorySubtitle}
      </h1>
      
      {/* Title for the category section with an underline image */}
      <div data-aos="fade-up" className='font-bold text-3xl drop-shadow flex items-center md:space-x-3 mb-10'>
        <p>{homepageData?.homeCategoryTitle}</p>
        <Image
          src='/redline.svg'
          width={520}
          height={500}
          alt={`Banner Image`}
          className="h-5 w-60 md:block hidden"
        />
      </div>

      {/* Grid layout for displaying image cards */}
      <div className="grid lg:grid-cols-4 gap-5">
        {homepageData?.categories?.map((category, index) => (
          <ul
            className={`relative cursor-pointer group ${index === 0 && 'col-span-2 row-span-2 w-full h-full'}`}
            key={index}
          >
            <Image
              src={category?.image?.node?.sourceUrl}
              width={600}
              height={620}
              alt={category?.title}
              className="w-full h-full"
            />
            <div
              data-aos="fade-up"
              className="absolute bottom-0 md:p-3 p-1 w-full flex md:flex-row flex-col md:items-center justify-between bg-transparent transition-all duration-300 group-hover:bg-yellow-500"
            >
              <p className={`font-semibold text-white md:text-base text-sm ${index === 0 && 'md:text-2xl'}`}>
                {category?.title}
              </p>
              <button className='text-orange-500 rounded-full bg-white font-semibold md:text-sm text-xs border md:py-1.5 py-1 px-3'>
                Read more
              </button>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Category;
