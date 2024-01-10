"use client";

import Link from "next/link";
import React, { useState } from "react";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      router.push("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
  


    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
    
    <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
       <img
        src="/images/logo.svg"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />


            <div className="flex justify-center items-center h-[60vh] w-[20vw] rounded-xl">
    
        
        <form className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14" onSubmit={submitHandler}>
           
        <h2 className="text-center mt-6 text-2xl text-[#efefef]">Login</h2>
           
            <input  onChange={(e) => setEmail(e.target.value)} className="pl-2 rounded-md placeholder:text-[15px]" type="email" name="email" placeholder='Email...' />
            <input  onChange={(e) => setPassword(e.target.value)} className="pl-2 rounded-md placeholder:text-[15px]" type="password" name="password" placeholder='Password...' />
            <button className="bg-white text-orange-400 px-6 py-2 rounded-xl mt-12 transition-all hover:bg-[#efefef]">
                Login
            </button>
        </form>
    </div>

    </div>
        



    

      


)











  
};

export default Login;