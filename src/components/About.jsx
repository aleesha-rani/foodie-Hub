const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-orange-50 px-6 py-20">




      <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-10 animate-bounce">
        About Us
      </h1>








      <div className="max-w-3xl border-4 border-orange-400 rounded-3xl p-10 bg-white shadow-2xl hover:scale-105 transition duration-500">

        <span className="text-3xl font-extrabold text-orange-500 block mb-6 text-center">
          Welcome to Foodie Hub 🍔
        </span>







        <p className="text-center text-gray-700 text-lg leading-9 animate-pulse">
          We serve delicious and fresh food made with love and quality
          ingredients. Our mission is to give every customer an amazing
          food experience with fast service and tasty meals.
        </p>

      </div>

    </div>
  );
};

export default About;