import React from 'react'
import { Link } from "react-router-dom";

function BookCard({price,image,title,id,discountPercentage}) {
  const discountPrice = price - ( price * discountPercentage / 100)
  return (
    <div className='border p-4 rounded mb-2 ml-1 shadow-md bg-white'>
        <Link to={`/product/${id}`}>
        <img src={image}
        alt={title} className='w-full object-cover mb-2'/>
       <h2 className='font-bold'>{title}</h2>
        <p className='mt-1'>{discountPrice.toFixed(2)}</p>
        <s>${price}</s>
        </Link>
    </div>
  )
}

export default BookCard