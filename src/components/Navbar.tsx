const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 flex items-center justify-between w-screen px-6 py-4 bg-white shadow-sm select-none ">
      <h2 className="text-2xl font-semibold text-primary">Healing Hub</h2>
      <div className="flex items-center gap-10 ">
        <button className="text-primary">Home</button>
        <button className="text-primary">Chat</button>
        <button className="text-primary">Community</button>
      </div>
      <div className="flex gap-4 ">
        <button className="px-6 py-2 text-white rounded-lg  bg-primary">
          Login
        </button>
        <button className="px-6 py-2 border rounded-lg  text-primary border-primary">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
