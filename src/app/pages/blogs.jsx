// components/Blogs.js
"use client";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector} from '@/app/store/hooks/index';
import { fetchHomepageData, selectHomepageData } from '@/app/store/slice/HomeDataslice';
import Image from 'next/image';
import Link from 'next/link';

function Blogs() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(selectHomepageData);

  useEffect(() => {
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const homepageData = data?.pages?.nodes[0]?.homepage;
  const blogData = data?.blogs?.nodes || [];

  return (
    <div className='md:px-32 px-5 my-14'>
      <h1 className='font-semibold md:text-2xl text-xl drop-shadow text-gray-800' data-aos="fade-up">
        {homepageData?.blogSubtitle}
      </h1>
      <div className='font-bold md:text-3xl text-2xl drop-shadow flex items-center md:space-x-3 mb-10' data-aos="fade-up">
        <p>{homepageData?.blogTitle}</p>
        <Image src='/yellowline.svg' width={520} height={500} alt="Banner Image" className="h-5 w-60 md:block hidden" loading='lazy' />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 cursor-pointer">
        {blogData.map((blog, index) => (
          <div data-aos="flip-right" key={index} className={`relative overflow-hidden group ${index === 1 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            {blog.featuredImage?.node?.sourceUrl && (
              <Image
                src={blog.featuredImage.node.sourceUrl}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            )}
            <div className='hover:text-orange-500 group'>
              <p className="group-hover:bg-orange-500 w-full absolute bottom-14 left-0 text-white text-sm px-2" >
                <i>{new Date(blog.date).toLocaleDateString()}</i>
              </p>
              <h2 className="absolute bottom-8 left-0 w-full break-words truncate overflow-hidden text-white font-bold px-2 group-hover:text- group-hover:bg-orange-500">
                {blog.title}
              </h2>
              <div className='group-hover:bg-orange-500 w-full'>
                <Link href='#' className="absolute bottom-2 left-1 text-black bg-white rounded-full py-1 px-2 font-semibold text-xs hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
