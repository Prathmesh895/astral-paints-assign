"use client";
import * as React from "react";
import About from "./pages/about";
import Category from "./pages/categories";
import Services from '@/app/pages/services'
import JoinHome from "./pages/joinHome";
import Blogs from "./pages/blogs";
import Banner from "./pages/banners";
import AOSWrapper from '@/app/lib/aoswrapper';
import Image from 'next/image';

function Page() {

  return (
    <AOSWrapper>
      <div>
        <Banner />
        <div className="z-10">
          <Image
            src="/rainbow-new.svg"
            width={1520}
            height={500}
            alt="Rainbow Image"
            className="w-full lg:top-[67%] md:top-[51%] sm:top-[41%] bottom-6 -z-0 absolute"
          />
        </div>
        {/* About section  */}
        <About />
        {/* categories  */}
        <Category />
        {/* Services */}
        <Services />
        {/* join homepage Data */}
        <JoinHome />
        {/* Blogs */}
        <Blogs />
      </div>
    </AOSWrapper>
  );
}

export default Page;