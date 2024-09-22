import * as yup from "yup"


// for sign up
export const signUpSchema = yup
.object({
    firstName: yup.string().required('Firstname is required'),
    lastName: yup.string().required('Lastname is required'),
    email: yup.string().required('Email is required').email("invalid email format"),
    password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 chrs"),
    confirmpassword: yup.string().required('Confirm password').min(8, "min lenght of password should be at least 8 chrs").oneOf([yup.ref("password")], "password do not match")
  })
  .required()

  export const signInSchema = yup
  .object({
      email: yup.string().required('Email is required').email("invalid email format"),
      password: yup.string().required('Password is required').min(8, "min lenght of password should be at least 8 chrs"),
    })
    .required()  
