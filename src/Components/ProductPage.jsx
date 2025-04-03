// ... (previous imports remain the same)

function ProductPage() {
  // ... (previous state and effects remain the same)

  return (
    <div className="w-full max-w-6xl mx-auto p-5 bg-white shadow-lg rounded-lg">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-5">
        ← Back
      </button>
      <div className="flex flex-col md:flex-row mt-5 gap-8">
        {/* Product Image - made larger and responsive */}
        <div className="md:w-1/2">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-auto max-h-[500px] rounded-lg shadow-md object-contain"
          />
        </div>

        {/* Product Info - adjusted spacing */}
        <div className="md:w-1/2">
          <p className="text-gray-500 uppercase">{product.category}</p>
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>

          {/* Pricing Section */}
          <div className="mt-6">
            <span className="text-2xl font-bold text-gray-900">${discountPrice} </span>
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
            <p className="text-green-500 text-sm font-semibold">{product.discountPercentage}% Off</p>
            <p className="text-gray-500 text-sm">(Incl. of all taxes)</p>
          </div>

          {/* Additional Details */}
          <div className="mt-6 space-y-2">
            <p className="text-gray-600">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Availability:</span> {product.availabilityStatus || "In Stock"}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Rating:</span> ⭐ {product.rating}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Tags:</span> {product.tags?.join(", ")}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Warranty:</span> {product.warrantyInformation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;