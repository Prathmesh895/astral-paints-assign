"use client"
import * as React from "react";
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Define the images for the footer
const images = [
  { src: '/logo.webp', alt: 'Logo', width: 150, height: 100 },
  { src: '/c1.webp', alt: 'C1', width: 150, height: 100 },
  { src: '/c2.webp', alt: 'C2', width: 150, height: 100 },
  { src: '/c3.webp', alt: 'C3', width: 150, height: 100 },
  { src: '/c5.webp', alt: 'C5', width: 150, height: 100 }
];

const footerLinks = {
  category: ['Interior paints', 'Exterior paints', 'Undercoats', 'Painting tools', 'Distemper & Enamel'],
  services: ['Wall painting', 'Water Solution', 'Painting', 'Colour shades'],
  downloads: ['Become a dealer', 'Blogs', 'Contact']
};

function Footer() {
  return (
    <footer className='text-white relative'>
      {/* Footer background image */}
      <img
        src='/blue-brick-wall-background.jpg'
        alt='Footer background'
        className=' w-full lg:h-[520px] md:h-[550px] h-[850px] object-cover -z-10 absolute top-0 left-0'
      />

      {/* Footer content */}
      <div className='relative z-10 md:h-full'>
        {/* Group Company Section */}
        <div className='border-b border-gray-400 lg:mx-36 md:mx-10 py-5'>
          <h1 className='font-semibold text-3xl text-center my-5 '>Group Company</h1>
          <div className="md:flex justify-between items-center hidden px-10 invert brightness-0 filter">
            {images.map((image, index) => (
              <div key={index} className="lg:w-36 lg:h-24 md:w-32 md:h-20">
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="md:hidden px-20 ">
            {/* carousel for home page imgs */}
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              interval={2000}
              className="relative"
            >
              {images.map((image, index) => (
                <div key={index} className="w-44 h-24 invert brightness-0 filter">
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="w-full h-full object-contain" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* Footer Contact and Info */}
        <div className='mt-10 lg:mx-32 md:mx-10 mx-5 flex flex-col  md:flex-row space-y-5 md:space-y-0 md:space-x-5'>
          <div className='md:basis-1/3'>
            <Image src='/logo.webp' width={150} height={100} alt='Logo' />
            <h1 className='font-semibold mt-4'>Reach Us</h1>
            <div className='flex items-center space-x-2 my-2 '>
              <div><CiLocationOn size={25} /></div>
              <p className="text-sm">207/1, ‘Astral House’, B/h. Rajpath Club, Off S. G. Highway, Ahmedabad – 380059, Gujarat, India.</p>
            </div>
            <div className='flex items-center space-x-2 my-2'>
              <div><BsTelephone size={20} /></div>
              <p>1800 309 9393</p>
            </div>
            <div className='flex items-center space-x-2'>
              <MdOutlineMail size={20} />
              <p>customercare@astralpaints.com</p>
            </div>
          </div>

          {/* Footer Links */}
          <div className='basis-3/4'>
            <div className='mb-5'>
              <h1 className='font-semibold'>Sign up for our newsletter</h1>
              <input
                type="email"
                placeholder='Enter email address'
                className='bg-transparent border p-2 my-1 rounded-full w-full md:w-80'
              />
            </div>
            <div className='flex justify-between space-x-4 text-sm'>
              {Object.keys(footerLinks).map((key) => (
                <div key={key} className='space-y-2'>
                  <h1 className='font-semibold text-yellow-500 capitalize'>{key}</h1>
                  {footerLinks[key].map((link, index) => (
                    <h1 key={index}>{link}</h1>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer  */}
      <div className="bg-[#0060af] lg:mt-2 md:mt-1 mt-5 md:text-sm text-[11px] md:px-32 flex  justify-between  px-5 py-2">
        <div>Terms & Conditions</div>
        <div>ALL RIGHTS RESERVED</div>
        <div>Privacy Policy</div>
      </div>
    </footer>
  );
}

export default Footer;