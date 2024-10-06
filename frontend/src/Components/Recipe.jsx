const Recipe = () => {
  return (
    <div className="mx-5 md:mx-20">
      <div>
        <h1 className="text-3xl font-bold text-teal-700 text-center m-5">
          Get Recipe Too:-
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* First image */}
        <div className="relative group m-4">
          <img
            src="./juice.jpg"
            alt="Juice"
            className="w-full md:w-[500px] h-[420px] object-cover rounded-2xl  hover:opacity-50 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xl font-semibold">View More</span>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col">
          {/* Second image */}
          <div className="relative group m-4">
            <img
              src="./ice-cream.jpg"
              alt="Ice Cream"
              className="lg:w-[400px] w-[250px] h-[200px] object-cover rounded-2xl  hover:opacity-50 "
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">
                View More
              </span>
            </div>
          </div>

          {/* Third image */}
          <div className="relative group m-4">
            <img
              src="./salad-1.jpg"
              alt="Salad"
              className="w-[250px] lg:w-[400px] h-[200px] object-cover rounded-2xl  hover:opacity-50 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold">
                View More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  items-center justify-center">
        <button className="bg-teal-500 px-8 py-3 md:text-2xl text-xl rounded-3xl m-4 text-white">
          View more Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipe;
