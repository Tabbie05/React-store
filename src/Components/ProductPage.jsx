import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (!product) {
    return <h1 className="text-center text-xl font-bold mt-20">Loading...</h1>;
  }

  // Calculate discounted price
  const discountPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  return (
    <div className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5 bg-white shadow-lg rounded-lg">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-5">
        ← Back
      </button>
      <div className="flex mt-5">
        {/* Product Image */}
        <div>
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="h-100 w-200 ml-5 rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="ml-10">
          <p className="text-gray-500 uppercase">{product.category}</p>
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>

          {/* Pricing Section */}
          <div className="mt-4">
            <span className="text-xl font-bold text-gray-900">${discountPrice} </span>
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
            <p className="text-green-500 text-sm font-semibold">{product.discountPercentage}% Off</p>
            <p className="text-gray-500 text-sm">(Incl. of all taxes)</p>
          </div>

          {/* Additional Details */}
          <div className="mt-4">
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
