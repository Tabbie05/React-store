import React from 'react';
import { Link } from "react-router-dom";

function BookCard({ price, image, title, id, discountPercentage }) {
  const discountPrice = price - (price * discountPercentage / 100);

  return (
    <div className='border p-4 rounded-lg shadow-md bg-white transition-all hover:shadow-xl transform hover:scale-105'>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className='w-full h-48 object-cover mb-3 rounded-lg' />
        <h2 className='font-semibold text-lg text-gray-800 truncate'>{title}</h2>
        <div className='flex items-center mt-2'>
          <span className='text-xl font-bold text-blue-600'>${discountPrice.toFixed(2)}</span>
          <span className='text-sm line-through text-gray-500 ml-2'>${price}</span>
        </div>
      </Link>
    </div>
  );
}

export default BookCard;
