import React, { useContext } from 'react'
import { mycontext } from '../context/CourseContext'

const Cart = () => {
  let { cart, removeFromCart } = useContext(mycontext)

  return (
    <div className="flex flex-wrap gap-6 p-6">

      {cart.map((course) => (
        <div
          key={course.id}
          className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >

          {/* Course Image */}
          <img
            src={course.image}
            alt={course.name}
            className="h-48 w-full object-cover"
          />

          {/* Course Details */}
          <div className="p-5">

            <h2 className="mb-2 text-xl font-bold text-gray-800">
              {course.name}
            </h2>

            <p className="mb-5 text-sm leading-6 text-gray-500">
              {course.description}
            </p>

            <div className="mb-5 space-y-2 text-sm text-gray-600">
              <p>⏱ {course.duration}</p>
              <p>👨‍🏫 {course.instructor}</p>
            </div>

            {/* Price and Remove Button */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-4">

              <span className="text-2xl font-bold text-blue-600">
                ₹{course.price}
              </span>

              <button
                onClick={() => removeFromCart(course.id)}
                className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Remove
              </button>

            </div>
          </div>
        </div>
      ))}

      {cart.length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

    </div>
  )
}

export default Cart