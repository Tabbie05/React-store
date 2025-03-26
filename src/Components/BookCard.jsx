import React from 'react'
import { Link } from "react-router-dom";

function BookCard({price,image,title,id}) {
  return (
    <div className='border p-4 rounded mb-2 ml-2'>
        <Link to={`/product/${id}`}>
        <img src={image}
        alt={title} className='w-full object-cover mb-2'/>
       <h2 className='font-bold'>{title}</h2>
       <p>${price}</p>
        </Link>
    </div>
  )
}

export default BookCard