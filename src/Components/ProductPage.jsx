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
          setProduct(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  if (!product) {
    return <h1 className="text-center text-xl font-bold mt-20">Loading...</h1>;
  }

  const discountPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-5">
        ← Back
      </button>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-auto max-h-[500px] object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <p className="text-gray-500 uppercase">{product.category}</p>
          <h1 className="text-3xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>

          <div className="mt-6">
            <span className="text-3xl font-bold">${discountPrice}</span>
            <span className="text-gray-500 line-through ml-2">${product.price}</span>
            <span className="text-green-500 ml-2">{product.discountPercentage}% OFF</span>
            <p className="text-gray-500 mt-1">(Incl. of all taxes)</p>
          </div>

          <div className="mt-6 space-y-3">
            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {product.rating}</p>
            <p><span className="font-semibold">Stock:</span> {product.stock} units</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;