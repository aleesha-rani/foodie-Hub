const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-12 relative overflow-hidden">




      <div className="absolute top-10 left-10 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>

      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-orange-300 rounded-full opacity-20 animate-bounce"></div>









      <div className="grid md:grid-cols-3 gap-10 relative z-10">




        <div className="hover:-translate-y-2 transition duration-500">

          <h1 className="text-3xl font-extrabold text-orange-500 mb-4 hover:drop-shadow-[0_0_15px_orange] transition duration-500">
            Foodie Hub 🍔
          </h1>

          <p className="text-gray-400 leading-7">
            Delicious food delivered fresh to your doorstep.
            Enjoy quality meals with amazing taste and fast service.
          </p>

          <p className="text-gray-400 mt-4">
            Made with <span className="animate-pulse text-red-500">❤️</span> by Aleesha
          </p>

        </div>









        <div className="hover:-translate-y-2 transition duration-500">

          <h2 className="text-2xl font-bold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-400">

            <li className="hover:text-orange-500 hover:translate-x-2 transition duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-orange-500 hover:translate-x-2 transition duration-300 cursor-pointer">
              Menu
            </li>

            <li className="hover:text-orange-500 hover:translate-x-2 transition duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-orange-500 hover:translate-x-2 transition duration-300 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>









        <div className="hover:-translate-y-2 transition duration-500">

          <h2 className="text-2xl font-bold mb-4">
            Contact Info
          </h2>

          <p className="text-gray-400 mb-3 hover:text-orange-400 transition duration-300">
            📍 Sargodha, Pakistan
          </p>

          <p className="text-gray-400 mb-3 hover:text-orange-400 transition duration-300">
            📞 03054781911
          </p>

          <p className="text-gray-400 hover:text-orange-400 transition duration-300">
            ✉ aleesharani354@gmail.com
          </p>

        </div>

      </div>









      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 relative z-10">
        © 2026 Foodie Hub. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;