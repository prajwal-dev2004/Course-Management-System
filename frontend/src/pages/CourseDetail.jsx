
import { useContext } from "react"
import { mycontext } from "../context/CourseContext"
import { useParams, useNavigate } from "react-router-dom"

const CourseDetail = () => {
  let { findById } = useContext(mycontext)
  let { id } = useParams()
  let cource = findById(id)
  let navigate = useNavigate()

  if (!cource) return <h2>Course not found</h2>

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <button
        onClick={() => navigate("/")}
        className="mb-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        ← Back to Courses
      </button>

      <div className="mx-auto max-w-xl rounded-xl bg-white p-6 shadow-lg">

        <img
          src={cource.image}
          alt={cource.name}
          className="mb-5 h-64 w-full rounded-lg object-cover"
        />

        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          {cource.name}
        </h1>

        <p className="mb-3 text-gray-600">{cource.description}</p>

        <p className="mb-2">
          <strong>Instructor:</strong> {cource.instructor}
        </p>

        <p className="mb-2">
          <strong>Duration:</strong> {cource.duration}
        </p>

        <p className="mb-2">
          <strong>Category:</strong> {cource.category}
        </p>

        <p className="mt-4 text-xl font-bold text-green-600">
          Price: ₹{cource.price}
        </p>

      </div>
    </div>
  )
}

export default CourseDetail
