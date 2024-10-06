import PropTypes from "prop-types";

const Card = ({ fruit }) => {
  return (
    <div className="bg-white shadow-lg w-[250px] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-full h-[200px]">
        <img
          src={fruit.image}
          alt={fruit.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Fruit Name */}
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {fruit.name}
        </h2>

        {/* Fruit Price and Rating */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-green-600">
            ${fruit.price.toFixed(2)}
          </span>
          <span className="text-sm text-yellow-500">⭐ {fruit.rating}/5</span>
        </div>

        {/* Fruit Description */}
        <p className="text-gray-600 text-sm mb-3">
          {fruit.description.length > 60
            ? `${fruit.description.substring(0, 60)}...`
            : fruit.description}
        </p>

        {/* Stock Availability */}
        <div
          className={`text-sm font-semibold ${
            fruit.stock ? "text-green-500" : "text-red-500"
          }`}
        >
          {fruit.stock ? "In Stock" : "Out of Stock"}
        </div>
      </div>
    </div>
  );
};

// PropTypes definition
Card.propTypes = {
  fruit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.bool.isRequired,
  }),
};

export default Card;
