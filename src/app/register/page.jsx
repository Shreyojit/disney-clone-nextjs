"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const router = useRouter();
  

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
        const res = await fetch('http://localhost:3000/api/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ name: name, email: email, password: password })
        })
        if (res?.error == null) {
            
            const data = await res.json()
            console.log(data)
            setTimeout(() => {
                router.push("/login")
            }, 1000)
        } else {
            console.log("error")
        }
    } catch (error) {
        console.log(error)
    }
  };

  // return (
  //   <div className="container container-fluid">
  //     <div className="row mt-5 d-flex justify-content-center">
  //       <div className="col-10 col-lg-5 ">
  //         <form
  //           className="border border-secondary rounded p-4"
  //           onSubmit={submitHandler}
  //         >
  //           <h1 className="mb-4">Register</h1>

  //           <div className="form-outline mb-4">
  //             <label className="form-label" htmlFor="name_field">
  //               Name
  //             </label>
  //             <input
  //               type="text"
  //               id="name_field"
  //               className="form-control"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //             />
  //           </div>

  //           <div className="form-outline mb-4">
  //             <label className="form-label" htmlFor="email_field">
  //               Email address
  //             </label>
  //             <input
  //               type="email"
  //               id="email_field"
  //               className="form-control"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>

  //           <div className="form-outline mb-4">
  //             <label className="form-label" htmlFor="password_field">
  //               Password
  //             </label>
  //             <input
  //               type="password"
  //               id="password_field"
  //               className="form-control"
  //               value={password}
  //               onChange={(e) => setPassword(e.target.value)}
  //             />
  //           </div>

  //           <button
  //             type="submit"
  //             className="btn btn-block w-100 btn-primary btn-block mb-4"
  //           >
  //             Register
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );





   
   

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
           
        <h2 className="text-center mt-6 text-2xl text-[#efefef]">Register</h2>

        <input  onChange={(e) => setName(e.target.value)} className="pl-2 rounded-md placeholder:text-[15px]" type="name" name="name" placeholder='Name...' />
           
            <input  onChange={(e) => setEmail(e.target.value)} className="pl-2 rounded-md placeholder:text-[15px]" type="email" name="email" placeholder='Email...' />
            <input  onChange={(e) => setPassword(e.target.value)} className="pl-2 rounded-md placeholder:text-[15px]" type="password" name="password" placeholder='Password...' />
            <button className="bg-white text-orange-400 px-6 py-2 rounded-xl mt-12 transition-all hover:bg-[#efefef]">
                Register
            </button>
        </form>
    </div>

    </div>
        



    

      


)












};

export default Register;