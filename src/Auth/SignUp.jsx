import React, {useEffect} from 'react'
import navlogo from '../assets/Group 9283.svg';


const SignUp = () => {
    useEffect(()=>{
        document.title = 'Sign Up'
    })
    return (
        <>
         <section className = " py-5 sign-in-container " >
             <main className = 'container d-lg-flex gap'>
                 <div className = "d-flex gap-2 perf">
                     <div>
                     <img src= {navlogo} alt="nav-logo"/>
                     </div>
                     <h2>Perfumrye</h2>
                 </div>
                 <div className = " bg-white forms">
                     <form className = "container form">
                         <h1>Get Started</h1>
                         <p>Lets get started by filling out the information below</p>
                         {/* full name */}
                         <div className = "d-md-flex align-items-center justify-content-between gap-5 py-2">
                             <div  className = "py-2">
                                 <label htmlFor="firstname">First Name</label>
                                 <input type="text" placeholder = "Enter Name" className = "input-group"/>
                             </div>
                             <div className = "pt-2">
                                 <label htmlFor="lastname">Last Name</label>
                                 <input type="text" placeholder = "Enter Name" className = "input-group"/>
                             </div>
                         </div>
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
                         {/* Confirm Password */}
                         <div className = "py-2">
                             <label htmlFor="password">Confirm Password</label>
                             <input type="password" name="password" id="Password"  placeholder = "Confirm your password" className = "input-groups"/>
                         </div>
                         {/* agree to terms */}
                         <div className = "d-flex gap-2 py-3">
                             <div>
                                 <input type="checkbox" name="check-box" id="checkbox" className = "w-100 checkbox"/>
                             </div>
                             <div className = "agree">
                                 <p>I agree to <span>Terms of Service</span> and <span>Privacy Policies</span></p>
                             </div>
                         </div>

                         {/* button */}
                         <div className = "py-2">
                            <button className = "w-100 bttn">Sign Up</button>
                         </div>

                         <div className = "py-2">
                             <button className = "w-100 bttn2 ">Continue with Google</button>
                         </div>

                         <div>
                             <p className = "text-center">Already have an account? <span>Sign in</span></p>
                         </div>
                     </form>
                 </div>
             </main>
         </section>
        </>
    )
}

export default SignUp
