"use client";
import * as React from "react";
import About from "./pages/about";
import Category from "./pages/categories";
import Services from '@/app/pages/services'
import JoinHome from "./pages/joinHome";
import Blogs from "./pages/blogs";
import Banner from "./pages/banners";
import Colors from "./pages/colors";
import AOSWrapper from '@/app/lib/aoswrapper';
import Image from 'next/image';

function Page() {

  return (
    <AOSWrapper>
      <div>
        {/* first section of home page */}
        <Banner />
        {/* Rainbow Img */}
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
        <section id="about"> <About /> </section>
        {/* categories  */}
        <section id="category" > <Category /> </section>
        {/* Services */}
        <section id="services"> <Services /> </section>
        {/* join homepage Data */}
        <section id="become-a-dealer"> <JoinHome /> </section>
        <Colors/>
        {/* Blogs */}
        <section id="blogs"> <Blogs /> </section>
      </div>
    </AOSWrapper>
  );
}

export default Page;