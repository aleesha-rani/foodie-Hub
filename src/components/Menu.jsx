import React from "react";

const Menu = () => {
  return (
    <div className="min-h-screen bg-orange-50 px-10 py-20 relative overflow-hidden">




      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-orange-500 mb-20 animate-pulse">
        Our Delicious Menu
      </h1>












      <div className="relative max-w-7xl mx-auto">




        <div className="grid md:grid-cols-3 gap-10">







          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-4 hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Pizza"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              Italian Pizza
            </h2>

            <p className="text-gray-600 mt-2">
              Hot cheesy pizza with delicious toppings.
            </p>
          </div>









          <div className="bg-white rounded-3xl shadow-xl p-6 hover:rotate-2 hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Salad"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              Healthy Salad
            </h2>

            <p className="text-gray-600 mt-2">
              Fresh healthy salad with amazing taste.
            </p>
          </div>









          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-rotate-2 hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1529042410759-befb1204b468"
              alt="Fries"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              Crispy Fries
            </h2>

            <p className="text-gray-600 mt-2">
              Golden crispy fries with spicy sauces.
            </p>
          </div>









          <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-110 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
              alt="Pasta"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              Creamy Pasta
            </h2>

            <p className="text-gray-600 mt-2">
              Creamy pasta cooked with rich Italian sauce.
            </p>
          </div>









          <div className="bg-white rounded-3xl shadow-xl p-6 hover:-translate-y-3 hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
              alt="Steak"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              BBQ Steak
            </h2>

            <p className="text-gray-600 mt-2">
              Tender BBQ steak with smoky flavor.
            </p>
          </div>









          <div className="bg-white rounded-3xl shadow-xl p-6 hover:rotate-1 hover:scale-105 transition duration-500">
            <img
              src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9"
              alt="Sandwich"
              className="w-full h-56 object-cover rounded-2xl"
            />

            <h2 className="text-2xl font-bold mt-5 text-gray-800">
              Club Sandwich
            </h2>

            <p className="text-gray-600 mt-2">
              Loaded sandwich with fresh ingredients.
            </p>
          </div>

        </div>













        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

          <div className="bg-orange-500 text-white px-8 py-6 rounded-full shadow-2xl text-center animate-bounce hover:scale-110 transition duration-500">

            <h2 className="text-4xl font-extrabold">
              50%
            </h2>

            <p className="font-bold text-lg">
              Discount
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Menu;