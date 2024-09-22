import React, {useEffect, useState} from 'react'
import navlogo from '../assets/Group 9283.svg';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { signUpSchema } from '../lib/ValidationSchema'
import {Link} from 'react-router-dom'
import or from '../assets/Frame 115.svg'
  


const SignUp = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(signUpSchema),
      });
      const onSubmit = (data) => console.log(data)
  
    useEffect(()=>{
        document.title = 'Sign Up'
    })
    return (
        <>
         <section className = " py-5 sign-in-container " >
             <main className = 'container d-lg-flex gap'>
                 <Link className = "d-flex gap-2 perf text-decoration-none" to = "/">
                 <div className = "d-flex gap-2 perf">
                     <div>
                     <img src= {navlogo} alt="nav-logo"/>
                     </div>
                     <h2>Perfumrye</h2>
                 </div>
                 </Link>
                 <div className = " bg-white forms">
                     <form className = "container form" onSubmit={handleSubmit(onSubmit)}>
                         <h1>Get Started</h1>
                         <p>Lets get started by filling out the information below</p>
                         {/* full name */}
                         <div className = "d-md-flex align-items-center justify-content-between gap-5 py-2">
                             <div  className = "py-2">
                                 <label htmlFor="firstname">First Name</label>
                                 <input type="text" placeholder = "Enter Name" className = "input-group" {...register("firstName")}/>
                                 <span className = "spans">{errors.firstName?.message}</span>
                             </div>

                             <div className = "pt-2">
                                 <label htmlFor="lastname">Last Name</label>
                                 <input type="text" placeholder = "Enter Name" className = "input-group" {...register("lastName")}/>
                                 <span className = "spans">{errors.lastName?.message}</span>
                             </div>
                         </div>
                         {/* Email */}
                         <div className = "py-2">
                             <label htmlFor="email">Email</label>
                             <input type="email" name="email" id="Email" placeholder = "Enter your Email" className = "input-groups" {...register("email")}/>
                             <span className = "spans">{errors.email?.message}</span>
                         </div>
                         {/* Password */}
                         <div className = "py-2">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="Password" placeholder = "Enter your Password" className = "input-groups" {...register("password")}/>
                             <span className = "spans">{errors.password?.message}</span>
                         </div>
                         {/* Confirm Password */}
                         <div className = "py-2">
                             <label htmlFor="password">Confirm Password</label>
                             <input type="password" name="password" placeholder = "Confirm your password" className = "input-groups" {...register("confirm password")}/>
                             <span className = "spans">{errors.confirmpassword?.message}</span>
                         </div>
                         {/* agree to terms */}
                         <div className = "d-flex gap-2 py-3">
                             <div>
                                 <input type="checkbox" name="check-box" id="checkbox" className = "w-100 checkbox"/>
                             </div>
                             <div className = "agree">
                                 <p>I agree to <span className = 'span'>Terms of Service</span> and <span className = 'span'>Privacy Policies</span></p>
                             </div>
                         </div>

                         {/* button */}
                         <div className = "py-2">
                            <button className = "w-100 bttn">Sign Up</button>
                         </div>

                         <div className = "or">
                             <img src= {or} alt="or-image"/>
                         </div>

                         <div className = "py-2">
                             <button className = "w-100 bttn2 ">Continue with Google</button>
                         </div>

                         <div className = "account">
                             <p className = "text-center">Already have an account?<span><Link to = "/auth/signin" className = "text-decoration-none span"> Sign in</Link></span></p>
                         </div>
                     </form>
                 </div>
             </main>
         </section>
        </>
    )
}

export default SignUp
