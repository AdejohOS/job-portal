import React from "react";

const Hero = () => {
  return (
    <section className="container mx-auto py-20">
      <p className="text-6xl font-bold text-center">
        Search, Apply & <br /> Get Your{" "}
        <span className="text-sky-600">Dream Job</span>
      </p>
      <p className="text-center max-w-prose mx-auto text-xl mt-4 text-gray-600">
        Start you hunt for the best life changing career opurtunities from here
        in your selected areas coviniently and get hired quickly!
      </p>

      <form
        action=""
        className="mt-6 text-center flex items-center max-w-prose mx-auto"
      >
        <input
          className="border border-gray-400 border-r-0 w-full  py-3 px-3 rounded-l-md"
          type="search"
          placeholder="Search jobs..."
        />
        <button
          type="submit"
          className="bg-sky-600 text-white py-3.5 px-3 rounded-r-md font-semibold"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
