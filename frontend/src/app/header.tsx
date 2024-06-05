"use client"
import image from './logo.png';
import Image from 'next/image';
import Menu from './menu-outline.svg';
import Link from 'next/link';

export default function Header() {

  const toggleMenu = ()=>{
    const target = document.querySelector('.nav-links');
    target?.classList.toggle('!top-[18%]');
  }

  return (
    <>
      <header className="bg-green-200 z-50 ">
        <nav className="list-none flex justify-between items-center w-[92%] mx-auto">
          <div><Image className='w-12' src={image} alt="Logo" /></div>
          <div className="nav-links absolute  md:z-10 duration-500 md:static md:min-w-12 md:min-h-fit  bg-green-200 min-h-[60vh] left-[0] top-[-100%] md:w-auto w-full flex items-center px-5">
            <div className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
              <Link href={'/'} className='hover:underline hover:cursor-pointer'>Home</Link>
              <Link href={'/UserDashboard'} className='hover:underline hover:cursor-pointer'>About Us</Link>
              <Link href={''} className='hover:underline hover:cursor-pointer'>Contact Us</Link>
            </div>
          </div>
          <div className='flex items-center gap-6'>
          <Link href={'#'} className="   hover:underline ">
            Sign Up
          </Link>
          <Link href={'#'} className="   hover:underline ">
            Login
          </Link>
            <button onClick={toggleMenu}><Image className='w-6 md:hidden md:cursor-default' src={Menu} alt="Logo" /></button>
          </div>
        </nav>
      </header>
    </>
  );
}
