import React from "react";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/reusable/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  // console.log(courses);
  return (
    <div>
      <div className="pt-20 text-center min-h-[60vh]">
        <h2 className="text-3xl text-blue-500 mb-7">Available Courses</h2>
        <div className="flex justify-center flex-wrap gap-7 mb-9">
          {courses && courses.length > 0 ? (
            courses.map((index) => (
              <CourseCard key={index._id} course={index} />
            ))
          ) : (
            <p>No courses yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
