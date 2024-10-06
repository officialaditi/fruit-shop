import { useState, useEffect } from "react";
import fruits from "../data.js";
import Card from "../Components/Card.jsx";

const ProductScreen = () => {
  // States for filtering and sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filteredData, setFilteredData] = useState(fruits);

  // Function to handle filtering and sorting
  const filterData = () => {
    let updatedData = fruits;

    // Search by name
    if (searchTerm) {
      updatedData = updatedData.filter((fruit) =>
        fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by name or price
    if (sortOption === "name") {
      updatedData = updatedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price") {
      updatedData = updatedData.sort((a, b) => a.price - b.price);
    }

    setFilteredData(updatedData);
  };

  // Use Effect to update filtered data when filters change
  useEffect(() => {
    filterData();
  }, [searchTerm, sortOption]);

  return (
    <div className="flex flex-col md:flex-row items-start justify-between">
      {/* Filter Panel */}
      <div className="bg-slate-400 m-4 rounded-xl p-6 w-full md:w-[300px] lg:w-[460px] min-h-[400px]">
        <h1 className="text-xl font-bold mb-4">Filter</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sort Option */}
        <label className="block mb-2">Sort By:</label>
        <select
          className="border p-2 mb-4 w-full"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4 w-full">
        {filteredData.length > 0 ? (
          filteredData.map((fruit) => <Card key={fruit.id} fruit={fruit} />)
        ) : (
          <p>No fruits found</p>
        )}
      </div>
    </div>
  );
};

export default ProductScreen;
