
function productitem({image,title,description,Price}){
    return(
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt="Product Image"
      />

      {/* Product Content */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>
        <p className="text-lg font-semibold text-blue-600 mt-4">{Price}</p>
      </div>

      {/* Button */}
      <div className="px-6 py-4">
        <button
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
        </div>
    )
}
export default productitem;