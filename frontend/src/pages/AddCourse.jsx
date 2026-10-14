
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CourseContext, { mycontext } from '../context/CourseContext';
import { useContext } from 'react';

const AddCourse = () => {
  let navigate = useNavigate();
  let{handleAddCourse}=useContext(mycontext)

  let [course, setcourse] = useState({
    name: "",
    instructor: "",
    description: "",
    price: "",
    duration: "",
    category: "",
    image: ""
  })

  let { name, instructor, description, price, duration, category, image } = course;

  let handleChange = ((e) => {
    setcourse({
      ...course,
      [e.target.name]: e.target.value
    })
  })

  let handleSubmit = (async (e) => {
    e.preventDefault();

    let course = {
      name: name,
      instructor: instructor,
      description: description,
      price: price,
      duration: duration,
      category: category,
      image: image
    }

    let res = await axios.post(
      "http://localhost:3000/courses",
      course
    )

    if (res.status == 201) {
      handleAddCourse(res.data);
      toast.success("course is added")
      navigate("/")
    } else {
      toast.error("course is not added")
    }
  })

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10 px-4">

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
        >

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            ADD COURSE
          </h1>

          {/* Course Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Course Name
            </label>

            <input
              type="text"
              placeholder="Enter the course name"
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Instructor */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Instructor
            </label>

            <input
              type="text"
              placeholder="Enter the instructor name"
              name="instructor"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>

            <textarea
              placeholder="Enter the course description"
              name="description"
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Course Price
            </label>

            <input
              type="number"
              placeholder="Enter the course price"
              name="price"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Duration */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Course Duration
            </label>

            <input
              type="number"
              placeholder="Enter the course duration"
              name="duration"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Course Category
            </label>

            <input
              type="text"
              placeholder="Enter the course category"
              name="category"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Image
            </label>

            <input
              type="text"
              placeholder="Enter the image URL"
              name="image"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            ADD COURSE
          </button>

        </form>

      </div>
    </>
  )
}

export default AddCourse

