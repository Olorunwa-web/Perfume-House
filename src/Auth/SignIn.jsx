import React, {useEffect} from 'react'
import navlogo from '../assets/Group 9283.svg';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { signInSchema } from '../lib/ValidationSchema'
import { Link } from 'react-router-dom';
import or from '../assets/Frame 115.svg';
const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(signInSchema),
      });
      const onSubmit = (data) => console.log(data)




    useEffect(()=>{
        document.title = 'Sign In'
    })
    return (
        <>
        <main className = "sign-in-container py-5">
               <section className = " container d-lg-flex gaps">
                   <Link className = "d-flex gap-3 perf text-decoration-none" to = "/">
                 <div className = "d-flex gap-3 perf">
                     <div>
                     <img src= {navlogo} alt="nav-logo"/>
                     </div>
                     <h2>Perfumrye</h2>
                  </div>
                   </Link>
                  <div className = " mt-4 bg-white formss">
                      <form className = " form" onSubmit={handleSubmit(onSubmit)}>
                         <h1>Welcome Back</h1>
                         <p>Fill your information to access your account.</p>
                         {/* Email */}
                         <div className = "py-2">
                             <label htmlFor="email">Email</label>
                             <input type="email" name="email" id="Email" placeholder = "Enter your Email" className = "input-groups" {...register("email")}/>
                             <span className = 'spans'>{errors.email?.message}</span>
                         </div>
                         {/* Password */}
                         <div className = "py-2">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="password" id="Password" placeholder = "Enter your Password" className = "input-groups" {...register("password")}/>
                             <span className = "spans">{errors.password?.message}</span>
                         </div>
                         {/* Remember */}
                         <div className = 'd-flex justify-content-between align-items-center'>
                             <div className = "d-flex gap-2 py-2">
                               <div>
                                 <input type="checkbox" name="check-box" id="checkbox" className = "w-100 checkbox"/>
                               </div>
                               <div className = "agree">
                                 <p>Remember Me</p>
                               </div>
                             </div>
                             <div className = 'forgot'>
                                 <p>Forget Password</p>
                             </div>
                         </div>
                         {/* button */}
                         <div className = "py-2">
                            <button className = "w-100 bttn">Sign Up</button>
                         </div>
                         <div className = 'or'>
                             <img src= {or} alt="or-image"/>
                         </div>

                         <div className = "py-2">
                             <button className = "w-100 bttn3 ">Continue with Google</button>
                         </div>

                         <div className = "account">
                             <p className = "text-center">Don't have an account? <span><Link to = "/auth/signup" className = "text-decoration-none span"> Sign Up</Link></span></p>
                         </div>
                      </form>
                  </div>
               </section>
        </main> 
        </>
    )
}

export default SignIn
