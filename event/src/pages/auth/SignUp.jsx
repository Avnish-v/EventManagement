import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleSignUp } from "../../service";
import { FullLoader } from "../../component/Loader";
import { CloseEye } from "../../assets/svg";
import { Icons } from "../../assets";

const SignUp = () => {
  const navigate  = useNavigate()
  const [Loading ,setLoading] = useState(false)
  const [showErr ,setShowErr] = useState(false); const [show ,setShow] =  useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
        "Password must contain at least 8 characters, including one letter, one number, and one special character"
      ),
    phone: Yup.string().required("Phone is required").matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
     try {
setLoading(true)
      const res = await handleSignUp(formik.values);
      console.log(res.data);
    if(res.data.Token){
      localStorage.setItem("token" ,res.data.Token.toString())
      localStorage.setItem("name" ,  res.data.user)
      localStorage.setItem("id" ,res?.data?.id);

       if(res.data.admin){
            navigate("/admin")
          }else{

            navigate("/")
          }
    }  
     } catch (error) {
      setShowErr(true)
     } finally{
setLoading(false)
     }
    },
  });
  const toggle = ()=>{
    setShow(prev=>!prev);
  }

  return (
    <>
 {Loading && <FullLoader/>}
    <div className="flex items-center justify-center h-screen ">
      <div className="bg-[#000000] shadow-2xl rounded-[12px] py-5 px-10 w-[422px]">
        <p className="text-3xl font-bold text-center text-secondary-50">SignUp</p>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 mt-5">
          <div>
            <p className="text-md font-semibold text-secondary-50 pb-2">Name</p>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="bg-[#1C1C1E] w-full rounded-md h-12 text-secondary-50 text-md px-2"
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <p className="text-md font-semibold text-secondary-50 pb-2">Email</p>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="bg-[#1C1C1E] w-full rounded-md h-12 text-secondary-50 text-md px-2"
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.email}</div>
            )}
          </div>
          <div className="relative">
            <p className="text-md font-semibold text-secondary-50 pb-2">Password</p>
            <input
              type={show ? "text" : "password"}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="bg-[#1C1C1E] w-full rounded-md h-12 outline-none text-secondary-50 text-md px-2"
              placeholder="Password"
            />
             <div className="absolute top-12  right-2 cursor-pointer" onClick={toggle}>
              {show ?<div ><img src={Icons.eye} width={24} /></div>: <CloseEye/>}
            </div> 
            {formik.touched.password && formik.errors.password && (
              <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.password}</div>
            )}
          </div>
          <div>
            <p className="text-md font-semibold text-secondary-50 pb-2">Phone</p>
            <input
              type="text"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className="bg-[#1C1C1E] w-full rounded-md h-12 text-secondary-50 text-md px-2"
              placeholder="Phone"
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.phone}</div>
            )}
          </div>
          <div>
            <p className="text-md font-semibold text-secondary-50 pb-2">Address</p>
            <input
              type="text"
              name="address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              className="bg-[#1C1C1E] w-full rounded-md h-12 text-secondary-50 text-md px-2"
              placeholder="Address"
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.address}</div>
            )}
            {showErr && (
                <div className="text-[#FF0000] pt-1 text-sm">"something went Wrong"</div>
              )}
          </div>
          <button type="submit" className="w-full h-12 bg-[#00A885] rounded-md">
            SignUp
          </button>
          <div className="flex justify-center items-center gap-2">
            <p className="text-sm text-[#88929B]">Already have an account?</p>{" "}
            <Link to={"/signin"}>
           <p className="text-md font-bold text-[#00A885] cursor-pointer">
              SignIn
            </p>
           </Link> 
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;
