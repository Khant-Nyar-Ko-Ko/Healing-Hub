const Navbar = () => {
  return (
    <nav className=" flex w-screen justify-between items-center sticky top-0 left-0 px-6 py-4 bg-white shadow-sm select-none">
      <h2 className="text-primary text-2xl font-semibold">M-Care</h2>
      <div className=" flex items-center gap-10">
        <button className="text-primary">Home</button>
        <button className="text-primary">Chat</button>
        <button className="text-primary">Community</button>
      </div>
      <div className=" flex gap-4">
        <button className=" bg-primary px-6 py-2 rounded-lg text-white">
          Login
        </button>
        <button className="  px-6 py-2 rounded-lg text-primary border border-primary">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
