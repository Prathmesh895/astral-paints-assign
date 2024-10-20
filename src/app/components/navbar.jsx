"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

//navigation items
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Category', href: '#category' },
  { label: 'Services', href: '#services' },
  { label: 'Colours', href: '#colors' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Become a dealer', href: '#become-a-dealer' },
  { label: 'Blogs', href: '#blogs' },
  { label: 'Contact', href: '#contact' },
  { label: 'Enquire Now', href: '#enquire', className: 'bg-white text-[#0060af] px-5 py-1.5 rounded-full font-semibold border transition ease-linear duration-300 hover:border-white hover:bg-[#0060af] hover:text-white' }
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='w-full fixed z-50 bg-[#0060af] lg:px-24 flex justify-between items-center'>
      {/* Logo */}
      <div>
      <Link href='/'> 
      <Image src='/logo.webp' width={150} height={100} alt='Logo' />
      </Link>
       
      </div>

      {/* Desktop Menu */}
      <ul className='lg:flex items-center text-white space-x-5 text-sm hidden'>
        {navItems.map((item, index) => (
          <li key={index} className={`cursor-pointer ${item.className ? item.className : ''}`}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className='lg:hidden text-white cursor-pointer' onClick={toggleMenu}>
        {isMenuOpen ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0060af] text-white flex flex-col items-start pl-10 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='w-full flex justify-end p-5'>
          <AiOutlineClose size={35} className='text-white cursor-pointer' onClick={toggleMenu} />
        </div>
        <ul className='space-y-4 mt-10'>
          {navItems.map((item, index) => (
            <li key={index} className={`cursor-pointer ${item.className ? item.className : ''}`} onClick={toggleMenu}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;