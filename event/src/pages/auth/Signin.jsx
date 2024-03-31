import React, { useState } from "react";
import { CloseEye, OpenEye, Security } from "../../assets/svg";
import { Link, useNavigate } from "react-router-dom";
import * as Yup  from "yup"
import {useFormik} from "formik"
import { handleSignin } from "../../service";
import { FullLoader } from "../../component/Loader";
import { Icons } from "../../assets";

const Signin = () => {
  const navigate  =  useNavigate();
  const [Loading ,setLoading] = useState(false);
  const [showErr ,setShowErr] = useState(false);
  const [show ,setShow] =  useState(false);
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required") .matches(
            /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,}$/,
            "Password must contain at least 8 characters, including one letter, one number, and one special character"
          ),
      });
    
      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          try {
            setLoading(true);
            await handleLogin(); // Wait for handleLogin to finish
          } catch (error) {
            console.error("Error:", error);
            setShowErr(true)
          } finally {
            setLoading(false); // Set loading to false regardless of success or failure
          }
        },
      });

      const toggle = ()=>{
        setShow(prev=>!prev);
      }

      const handleLogin = async(e)=>{
       const res = await handleSignin(formik.values);
        if(res.data.Token){
          localStorage.setItem("token" ,res?.data?.Token.toString())
          localStorage.setItem("name" ,  res?.data?.user)
          localStorage.setItem("admin" , res?.data.admin)
          localStorage.setItem("id" ,res?.data?.id);
          if(res.data.admin){
            navigate("/admin")
          }else{

            navigate("/")
          }
        }
      }

  return (
    <>
   {Loading && <FullLoader/>}
    <div className="flex items-center  justify-center h-screen">
      <form className="bg-[#000000] shadow-2xl rounded-[12px] py-10 px-10 w-[422px]" onSubmit={formik.handleSubmit}>
        <p className="text-3xl font-bold text-center text-secondary-50">
          SignIn
        </p>
        <div className="flex flex-col items-center ">
          <p className="text-center text-[#88929B] py-5">
            {" "}
            We Respect Your Privacy Please Don't Share Your Carendential to
            anyone
          </p>
          <Security />
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <div>
            <p className="text-md font-semibold text-secondary-50 pb-2">
              Email
            </p>
            <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
              type="email"
              name="email"
              className="bg-[#1C1C1E] w-full rounded-md h-12 text-secondary-50 text-md px-2"
              placeholder="Email "
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.email}</div>
              ) : null}
              
          </div>
          <div className="relative">
            <p className="text-md font-semibold text-secondary-50 pb-2">
              Password
            </p>
            <input
           
            name="password"
              type={show ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="bg-[#1C1C1E]  w-full rounded-md h-12 outline-none text-secondary-50 text-md px-2"
              placeholder="Password"
            />
            <div className="absolute top-12  right-2 cursor-pointer" onClick={toggle}>
              {show ?<div ><img src={Icons.eye} width={24} /></div>: <CloseEye/>}
            </div> 
            {formik.touched.password && formik.errors.password ? (
                <div className="text-[#FF0000] pt-1 text-sm">{formik.errors.password}</div>
              ) : null}
               {showErr && (
                <div className="text-[#FF0000] pt-1 text-sm">"something went Wrong"</div>
              )}
          </div>
          <button type="submit" className="w-full h-12 bg-[#00A885] rounded-md mt-5">
            Login
          </button>
          <div className="flex justify-center items-center gap-2">
            <p className="text-sm text-[#88929B] ">
              if you don't have Account ?
            </p>{" "}
            <Link to={"/signup"}>
              <p className="text-md font-bold text-[#00A885] cursor-pointer">
                SignUp
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signin;
