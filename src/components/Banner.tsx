import { NavLink } from "react-router-dom";
import banner from "../assets/old-patient-suffering-from-parkinson 1.png";

const Banner = () => {
  return (
    <>
      {" "}
      <div className=" w-screen h-[500px] absolute bg-primary opacity-10 z-10"></div>
      <div className=" w-screen h-[500px] z-20 absolute">
        <h2 className="absolute top-[30%] left-[12%] text-primary text-4xl font-bold font-serif">
          Healing Hub
        </h2>
        <p className="absolute top-[40%] left-[12%] text-slate-800 font-serif">
          Where your journey to mental well-being begins,{" "}
        </p>
        <p className="absolute top-[45%] left-[12%] text-slate-800 font-serif">
          with support every step of the way
        </p>
        <NavLink to="/chat">
          <button className="absolute top-[55%] left-[12%] text-white px-4 py-2 bg-primary rounded-lg">
            Consult
          </button>
        </NavLink>
      </div>
      <img src={banner} className=" w-screen h-[500px] object-cover" alt="" />
    </>
  );
};

export default Banner;
