
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userdetails } from '../context/UserContex'
import { mycontext } from '../context/CourseContext'

const CourseCard = ({ data }) => {
  let{user}=useContext(userdetails)
  let{deletedById,addToCart}=useContext(mycontext)
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Course Image */}
      <img
        src={data.image}
        alt={data.name}
        className="h-48 w-full object-cover"
      />

      {/* Course Details */}
      <div className="p-5">

        <h2 className="mb-2 text-xl font-bold text-gray-800">
          {data.name}
        </h2>

        <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-500">
          {data.description}
        </p>

        {/* Course Information */}
        <div className="mb-5 space-y-2 text-sm text-gray-600">

          <span className="flex items-center gap-2">
            ⏱
            <span>{data.duration}</span>
          </span>

          <span className="flex items-center gap-2">
            👨‍🏫
            <span>{data.instructor}</span>
          </span>

        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">

          <span className="text-2xl font-bold text-blue-600">
            ₹{data.price}
          </span>

          {
            user?.role=="user"&& (
              <Link
            to={`/view-course/${data.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            View Course
          </Link>
            )
          }
          {
            user?.role=="admin"&&(
               <Link
            to={`/course/${data.id}`}
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            update
          </Link>

            )
          }
          {
            user?.role=="admin"&&(
               <button onClick={()=>deletedById(data.id) }className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
                delete
               </button>
            )
          }
          {
            user?.role=="user"&&(
              <button
               onClick={() => addToCart(data)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add to Cart
        </button>

            )
          }
        </div>

      </div>

    </div>
  )
}

export default CourseCard