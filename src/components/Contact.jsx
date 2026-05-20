import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-50 px-6 py-20 relative overflow-hidden">







      <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full animate-bounce opacity-40"></div>

      <div className="absolute top-32 right-20 w-10 h-10 bg-orange-400 rounded-full animate-ping opacity-40"></div>

      <div className="absolute bottom-20 left-24 w-20 h-20 bg-yellow-300 rounded-full animate-pulse opacity-30"></div>

      <div className="absolute bottom-32 right-10 w-14 h-14 bg-orange-500 rounded-full animate-bounce opacity-30"></div>

      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-orange-200 rounded-full animate-ping opacity-40"></div>

      <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-yellow-200 rounded-full animate-pulse opacity-30"></div>

      <div className="absolute bottom-10 right-1/4 w-10 h-10 bg-orange-300 rounded-full animate-bounce opacity-40"></div>

      <div className="absolute top-16 left-1/2 w-14 h-14 bg-orange-400 rounded-full animate-pulse opacity-30"></div>















      <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] rounded-[40px] p-10 w-full max-w-2xl relative z-10 hover:scale-105 transition duration-500">




        <h1 className="text-5xl font-extrabold text-center text-orange-500 mb-12 animate-bounce drop-shadow-lg">
          Contact Us
        </h1>









        <form className="flex flex-col gap-8">







          <div className="relative">

            <input
              type="text"
              required
              className="peer w-full border-2 border-orange-300 rounded-2xl px-5 pt-7 pb-3 outline-none focus:border-orange-500 bg-transparent"
            />

            <label className="absolute left-5 top-4 text-gray-500 transition-all duration-300 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-orange-500
            peer-valid:-top-3 peer-valid:text-sm peer-valid:text-orange-500
            bg-white px-2">
              Enter Your Name
            </label>

          </div>









          <div className="relative">

            <input
              type="email"
              required
              className="peer w-full border-2 border-orange-300 rounded-2xl px-5 pt-7 pb-3 outline-none focus:border-orange-500 bg-transparent"
            />

            <label className="absolute left-5 top-4 text-gray-500 transition-all duration-300 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-orange-500
            peer-valid:-top-3 peer-valid:text-sm peer-valid:text-orange-500
            bg-white px-2">
              Enter Your Email
            </label>

          </div>









          <div className="relative">

            <textarea
              rows="5"
              required
              className="peer w-full border-2 border-orange-300 rounded-2xl px-5 pt-7 pb-3 outline-none focus:border-orange-500 resize-none bg-transparent"
            ></textarea>

            <label className="absolute left-5 top-4 text-gray-500 transition-all duration-300 
            peer-focus:-top-3 peer-focus:text-sm peer-focus:text-orange-500
            peer-valid:-top-3 peer-valid:text-sm peer-valid:text-orange-500
            bg-white px-2">
              Write Your Message
            </label>

          </div>









          <button
            className="bg-orange-500 text-white py-4 rounded-2xl hover:bg-black transition duration-300 text-lg font-bold shadow-lg hover:scale-105"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;