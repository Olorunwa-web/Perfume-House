import React, {useEffect} from 'react'
import navlogo from '../assets/Group 9283.svg';

const SignIn = () => {
    useEffect(()=>{
        document.title = 'Sign In'
    })
    return (
        <>
        <main className = "sign-in-container py-5">
               <section className = " container d-lg-flex gaps">
                 <div className = "d-flex gap-3 perf">
                     <div>
                     <img src= {navlogo} alt="nav-logo"/>
                     </div>
                     <h2>Perfumrye</h2>
                  </div>
                  <div className = " mt-4 bg-white forms">
                      <form className = "container  form">
                         <h1>Welcome Back</h1>
                         <p>Fill your information to access your account.</p>
                         {/* Email */}
                         <div className = "py-2">
                             <label htmlFor="email">Email</label>
                             <input type="email" name="email" id="Email" placeholder = "Enter your Email" className = "input-groups"/>
                         </div>
                         {/* Password */}
                         <div className = "py-2">
                             <label htmlFor="password">Password</label>
                             <input type="password" name="password" id="Password" placeholder = "Enter your Password" className = "input-groups"/>
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

                         <div className = "py-2">
                             <button className = "w-100 bttn3 ">Continue with Google</button>
                         </div>

                         <div>
                             <p className = "text-center">Already have an account? <span>Sign in</span></p>
                         </div>
                      </form>
                  </div>
               </section>
        </main> 
        </>
    )
}

export default SignIn
