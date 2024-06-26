import React, { useRef, useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import Link from 'next/link';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("token") !== null);
  }, []);

  const Logout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    toast.success('Logged out Sucessfully', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
      });
      router.push("/login");
  };

  const ref = useRef();

  const toggle = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };

  return (
    <div>
      <div className="navbar flex flex-col md:flex-row items-center bg-orange-300 md:p-2 shadow-lg py-4 ">
        <div className=' top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden'>
          <GiHamburgerMenu onClick={toggle} />
        </div>
        <Link href={"/"}>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 ml-10 cursor-pointer">
            <img src="/logo.png" alt="" className='h-10 -translate-x-4 md:translate-x-0 object-center object-cover ' />
          </div>
        </Link>
        <div ref={ref} className="navitems md:z-0 z-40 flex flex-col md:flex-row md:items-center md:bg-inherit bg-orange-400 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out" >
          <span className='absolute top-8 left-8' onClick={toggle}><AiFillCloseCircle className='text-4xl font-extralight md:hidden' /></span>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0">
            <Link href={"/addfir"}><div onClick={toggle} className='hover:text-red-600 text-black cursor-pointer'>Add FIR</div></Link>
            <Link href={"/map/0"}><div onClick={toggle} className='hover:text-red-600 text-black cursor-pointer'>Check Crimes</div></Link>
            <Link href={"/crimecolorcodes"}><div onClick={toggle} className='hover:text-red-600 text-black cursor-pointer'>Crime Color Codes</div></Link>
          </div>
        </div>
        {!isLogin ? (
          <Link href={'/login'}>
            <button key={isLogin} className="flex mx-auto text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded-full text-lg">Login</button>
          </Link>
        ) : (
          <button key={isLogin} onClick={Logout} className="flex mx-auto text-white bg-orange-600 border-0 py-2 px-8 focus:outline-none hover:bg-orange-700 rounded-full text-lg">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
