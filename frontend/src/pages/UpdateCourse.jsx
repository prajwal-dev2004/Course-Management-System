
import axios from 'axios'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { userdetails } from '../context/UserContex'
import { mycontext } from '../context/CourseContext'

const UpdateCourse = () => {
  let { id } = useParams()
  let { handleUpdatedCourse } = useContext(mycontext)
  let navigate = useNavigate()

  let [cdetails, setcdetails] = useState({
    name: "",
    instructor: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    image: ""
  })

  let handleChange = (e) => {
    setcdetails({
      ...cdetails,
      [e.target.name]: e.target.value
    })
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.put(
      `http://localhost:3000/courses/${id}`,
      cdetails
    )

    if (res.status == 200) {
      handleUpdatedCourse(res.data)

      toast.success("courses is updated")
      navigate("/")
    } else {
      toast.error("course is not updated")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg sm:p-10"
      >

        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          Update Course
        </h1>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter course name"
              value={cdetails.name}
              name="name"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Instructor
            </label>
            <input
              type="text"
              placeholder="Enter instructor name"
              value={cdetails.instructor}
              name="instructor"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              value={cdetails.description}
              name="description"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={cdetails.price}
              name="price"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Duration
            </label>
            <input
              type="number"
              placeholder="Enter duration"
              value={cdetails.duration}
              name="duration"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              placeholder="Enter category"
              value={cdetails.category}
              name="category"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Enter image URL"
              value={cdetails.image}
              name="image"
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200"
          >
            Update Course
          </button>

        </div>
      </form>

    </div>
  )
}

export default UpdateCourse
