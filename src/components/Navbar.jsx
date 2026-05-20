const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md sticky top-0 z-50">

      <div className="flex items-center gap-2 cursor-pointer">
        <span className="text-4xl">🍔</span>

        <h1 className="text-3xl font-extrabold text-orange-500">
          Foodie Hub
        </h1>
      </div>









      <ul className="flex gap-8 font-medium">

        <li>
          <a
            href="#home"
            className="relative text-gray-700 hover:text-orange-500 transition duration-300
            after:content-[' '] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-orange-500 after:w-0
            hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </a>
        </li>









        <li>
          <a
            href="#menu"
            className="relative text-gray-700 hover:text-orange-500 transition duration-300
            after:content-[' '] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-orange-500 after:w-0
            hover:after:w-full after:transition-all after:duration-300"
          >
            Menu
          </a>
        </li>









        <li>
          <a
            href="#about"
            className="relative text-gray-700 hover:text-orange-500 transition duration-300
            after:content-[' '] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-orange-500 after:w-0
            hover:after:w-full after:transition-all after:duration-300"
          >
            About
          </a>
        </li>









        <li>
          <a
            href="#contact"
            className="relative text-gray-700 hover:text-orange-500 transition duration-300
            after:content-[' '] after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:bg-orange-500 after:w-0
            hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </a>
        </li>

      </ul>









      <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-black transition duration-300">
        Order Now
      </button>

    </nav>
  );
};

export default Navbar;