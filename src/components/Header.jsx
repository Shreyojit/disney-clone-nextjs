
import React from 'react'
import Image from "next/image";
import { Menu } from '@headlessui/react'
import DropdownLink from './DropdownLink';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';


// import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { ShoppingBag } from '@mui/icons-material';
import Link from 'next/link';



const Header = () => {
  const { data } = useSession();

  
  const router = useRouter();



  const logoutClickHandler = () => {
   
    signOut({ callbackUrl: '/login' });
  };



  return (
    // <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 h-[72px] md:px-12">
    //   <Image
    //     src="/images/logo.svg"
    //     alt=""
    //     width={80}
    //     height={80}
    //     className="cursor-pointer"
    //     onClick={() => router.push("/")}
    //   />
    //   {data && (
    //     <div className="hidden ml-10 md:flex items-center space-x-6">
    //       <a className="header-link group">
    //         <HomeIcon className="h-4" />
    //         <span className="span">Home</span>
    //       </a>
    //       <a className="header-link group">
    //         <SearchIcon className="h-4" />
    //         <span className="span">Search</span>
    //       </a>
    //       <a className="header-link group">
    //         <AddIcon className="h-4" />
    //         <span className="span">Watchlist</span>
    //       </a>
    //       <a className="header-link group">
    //         <StarIcon className="h-4" />
    //         <span className="span">Originals</span>
    //       </a>
    //       {/* <a className="header-link group">
    //         <img src="/images/movie-icon.svg" alt="" className="h-5" />
    //         <span className="span">Movies</span>
    //       </a>
    //       <a className="header-link group">
    //         <img src="/images/series-icon.svg" alt="" className="h-5" />
    //         <span className="span">Series</span>
    //       </a> */}
    //     </div>
    //   )}
    //   {!data ? (
    //     <button
    //       className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
         
    //     >
    //       Login
    //     </button>
    //   ) : (
    //     // <img
    //     //   src={session?.user?.image}
    //     //   className="ml-auto h-12 w-12 rounded-full object-cover cursor-pointer"
    //     //   onClick={signOut}
    //     // />

    //     <>
    //     <span >
    //       Hi, {data?.user?.name}
    //     </span>

    //     <span style={{ cursor: "pointer" }} onClick={() => signOut()}>
    //       {" "}
    //       Logout
    //     </span>
    //   </>


    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">

    <div className='bg-[#040714] text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center'>
    <div className='h-full w-10/12 my-auto flex justify-between items-center'>
        {/* left */}
        <h2 className='text-3xl'>
            <Link href='/'>

            <Image
        src="/images/logo.svg"
        alt=""
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

            </Link>
        </h2>
        {/* center */}
        <ul className='flex justify-center items-center gap-6 text-[#efefef] text-[18px]'>
            <li className='cursor-pointer transition-all hover:text-[#efefefe6]'>
            
            <a className="flex items-center space-x-2 cursor-pointer">
            <HomeIcon className="h-4" />
           <span className="span">Home</span>
        </a>


            </li>
            <li className='cursor-pointer transition-all hover:text-[#efefefe6]'>
            <a className="flex items-center space-x-2 cursor-pointer">
          <AddIcon className="h-4" />
          <span className="span">Watchlist</span>
         </a>

            </li>
            <li className='cursor-pointer transition-all hover:text-[#efefefe6]'>

            <a className="flex items-center space-x-2 cursor-pointer">
         <StarIcon className="h-4" />
          <span className="span">Originals</span>
           </a>

            </li>
            <li className='cursor-pointer transition-all hover:text-[#efefefe6]'>

            <a className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>

            </li>
            <li className='cursor-pointer transition-all hover:text-[#efefefe6]'>

            <a className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>


            </li>
        </ul>
        {/* right */}
        <div className='flex items-center gap-8'>
            <div className='flex items-center gap-4 bg-white px-2 py-1 rounded-lg'>
                <input className='text-[#222] outline-none' type="text" placeholder='Search...' />
                <SearchIcon color="black" />
            </div>
            <div className='relative'>
                <ShoppingBag size={25}  />
                <span className='absolute -top-3 -right-4 px-2 rounded-full bg-white text-[#222]'>
                    5
                </span>
                 {/* <div className="absolute top-4 -right-16 z-10">
                    {isCartOpen && <Cart />}
                </div> */}
            </div> 
            {/* <span> Hi, {data?.user?.name}</span> */}





            <Menu as="div" className="relative inline-block">
                  <Menu.Button className="text-[#efefefe6] text-center">
                  Hi, {data?.user?.name}
                  </Menu.Button>
                  <Menu.Items className="absolute right--1 w-40 origin-top-right bg-black  shadow-md ">
                    <Menu.Item>
                      <DropdownLink className="flex p-2 hover:bg-gray-200" href="/subscriptions">
                        My Account
                      </DropdownLink>
                    </Menu.Item>
                    <Menu.Item>
                      <DropdownLink
                        className="flex p-2 hover:bg-gray-200"
                        href="/order-history"
                      >
                        Invoices
                      </DropdownLink>
                    </Menu.Item>
                    
                    <Menu.Item>
                      <a
                        className="flex p-2 hover:bg-gray-200"
                        href="#"
                        onClick={logoutClickHandler}
                      >
                        Logout
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>










        </div>
    </div>
</div>

</header>



  );
}

export default Header;