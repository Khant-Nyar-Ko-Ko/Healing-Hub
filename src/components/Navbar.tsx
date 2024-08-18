import { useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/blank-profile-picture-973460_1280.webp";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const [isToken, setIsToken] = useState(false);

  const handleToken = () => {
    setIsToken(!isToken);
  };
  return (
    <nav className="sticky top-0 left-0 z-50 flex items-center justify-between w-screen px-10 py-4 bg-white shadow-sm select-none ">
      <NavLink to="/">
        <h2 className="text-2xl font-semibold text-primary">Healing Hub</h2>
      </NavLink>

      <div className="flex items-center gap-10 ">
        <NavLink to="/">
          <button className="text-primary">Home</button>
        </NavLink>
        <NavLink to="/empty-chat">
          <button className="text-primary">Chat</button>
        </NavLink>
        <NavLink to="/community">
          <button className="text-primary">Community</button>
        </NavLink>
      </div>
      {isToken ? (
        <div className="flex items-center gap-3">
          <img src={profile} className="w-12 h-12 rounded-full" alt="" />
          <div className="flex flex-col items-start justify-center gap-1">
            <h3>John Doe</h3>
          </div>
          <button className=" text-primary">
            <MdKeyboardArrowDown size="20px" />
          </button>
        </div>
      ) : (
        <div className="flex gap-4 ">
          <NavLink to="/auth/patient-login">
            <button
              onClick={handleToken}
              className="px-6 py-2 text-white rounded-lg bg-primary"
            >
              Login
            </button>
          </NavLink>
          <NavLink to="/auth/patient-register">
            <button
              onClick={handleToken}
              className="px-6 py-2 border rounded-lg text-primary border-primary"
            >
              Register
            </button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
