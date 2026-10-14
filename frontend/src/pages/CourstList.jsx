
import React, { useContext } from 'react'
import { mycontext } from '../context/CourseContext'
import CourseCard from '../component/CourseCard'

const CourstList = () => {
    let { allcources } = useContext(mycontext)

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                Explore Courses
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allcources?.map((course) => {
                        return <CourseCard data={course}></CourseCard>
                    })
                }
            </div>

        </div>
    )
}

export default CourstList