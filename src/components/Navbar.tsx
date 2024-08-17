import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 flex items-center justify-between w-screen px-10 py-4 bg-white shadow-sm select-none ">
      <NavLink to="/">
        <h2 className="text-2xl font-semibold text-primary">Healing Hub</h2>
      </NavLink>

      <div className="flex items-center gap-10 ">
        <NavLink to="/">
          <button className="text-primary">Home</button>
        </NavLink>
        <NavLink to="/chat">
          <button className="text-primary">Chat</button>
        </NavLink>
        <NavLink to="/community">
          <button className="text-primary">Community</button>
        </NavLink>
      </div>
      
      <div className="flex gap-4 ">
        <NavLink to="/auth/patient-login">
          <button className="px-6 py-2 text-white rounded-lg bg-primary">
            Login
          </button>
        </NavLink>
        <NavLink to="/auth/patient-register">
          <button className="px-6 py-2 border rounded-lg text-primary border-primary">
            Register
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
