import { useState } from "react";
import { NavLink } from "react-router-dom";
import google from "../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PatientRegisterForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(() => !showPassword);
      };

      const toggleShowPasswordVisibility = () => {
        setShowConfirmPassword(() => !showConfirmPassword);
      };
  return (
    <div className="flex flex-col items-center justify-center w-1/2 gap-5">
      <h2 className="text-3xl font-semibold text-primary">Healing Hub</h2>
      <div className="flex flex-col">
        <label htmlFor="">Username</label>
        <input
          type="text"
          className="px-4 py-2 border rounded w-[400px] border-slate-400"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="px-4 py-2 border rounded w-[400px] border-slate-400"
          placeholder="                                                           @gmail.com"
        />
      </div>
      <div className="relative flex flex-col">
        <label htmlFor="">Password</label>
        <input
         type={showPassword ? "text" : "password"}
          className="px-4 py-2 border rounded w-[400px] border-slate-400"
        />
        <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-9 focus:outline-none"
                >
                    {showPassword ? (
                    <FaEyeSlash color="slate" />
                  ) : (
                    <FaEye color="slate" />
                  )}
                </button>
        
      </div>
      <div className="relative flex flex-col">
        <label htmlFor="">Confirm Password</label>
        <input
         type={showConfirmPassword ? "text" : "password"}
          className="px-4 py-2 border rounded w-[400px] border-slate-400"
        />
        <button
                  type="button"
                  onClick={toggleShowPasswordVisibility}
                  className="absolute right-5 top-9 focus:outline-none"
                >
                    {showConfirmPassword ? (
                    <FaEyeSlash color="slate" />
                  ) : (
                    <FaEye color="slate" />
                  )}
                </button>
        
      </div>
      <div className="flex gap-1">
        <p>Already have an account?</p>
        <NavLink to="/auth/patient-login">
        <button className=" text-primary">Login</button>
        </NavLink>
      </div>
      <NavLink to="/">
      <button className="px-6 py-2 text-white rounded-lg bg-primary">
      Register
      </button>
      </NavLink>
      <button className="flex items-center gap-2 px-6 py-2 border rounded-full border-slate-400" >
        <img src={google} className=" w-[20px] h-auto" alt="" />
        <span>

        Continue with Google
        </span>
      </button>
    </div>
  )
}

export default PatientRegisterForm