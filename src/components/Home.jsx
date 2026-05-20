const Home = () => {
  return (
    <div
      id="home"
      className="min-h-screen bg-orange-50 flex items-center justify-between px-10 py-16 overflow-hidden"
    >




      <div className="max-w-xl">




        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">

          <span className="text-orange-500 inline-block animate-[slideLeft_1.2s_ease-out]">
            Delicious Food
          </span>

          <br />

          <span className="inline-block animate-[slideLeft_1.8s_ease-out]">
            Delivered Fast 🍔
          </span>

        </h1>









        <p className="text-gray-600 text-lg mt-6 leading-8 hover:scale-105 transition duration-500">
          Enjoy fresh and tasty meals from Foodie Hub.
          We deliver happiness with every bite and make
          your food experience unforgettable.
        </p>









        <div className="flex gap-5 mt-8">

          <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-black hover:-translate-y-2 hover:scale-105 transition duration-500 shadow-xl">
            Order Now
          </button>









          <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white hover:scale-105 transition duration-500 shadow-xl">
            Explore Menu
          </button>

        </div>

      </div>














      <div className="relative">

        <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-300 rounded-full opacity-40 animate-ping"></div>

        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>







        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food"
          className="w-[500px] rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
        />

      </div>

    </div>
  );
};

export default Home;