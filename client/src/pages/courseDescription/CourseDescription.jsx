import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import Button from "../../components/reusable/Button";

const CourseDescription = ({ user }) => {
  const navigate = useNavigate();
  const params = useParams();
  //   console.log(params.id);

  const { fetchCourse, course } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, []);
  return (
    <div>
      {course && (
        <div className="p-[80px] text-center min-h-[55vh] flex items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-wrap gap-5 mb-10">
            <img
              src={`${server}/${course.image}`}
              alt=""
              className=" w-[200px] h-[150px] object-cover rounded-xl"
            />
            <div className="text-left">
              <h2 className="text-2xl">{course.title}</h2>
              <p className="text-[14px] text-gray-600 my-1.5">
                Instructor: {course.createdBy}
              </p>
              <p className="text-[14px] text-gray-600 my-1.5">
                Duration: {course.duration}
              </p>
            </div>
          </div>
          <p className="text-[16px] text-gray-700 text-center max-w-[800px] mx-auto">
            Let's get started with course At {course.price}
          </p>
          {user && user.subscription.includes(course._id) ? (
            <Button
              title="Study"
              bgColor="blue"
              color="#fff"
              padding="10px 24px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600 text-center"
              onClick={() => navigate(`/course/study/${course._id}`)}
            />
          ) : (
            <Button
              title="Buy Now"
              bgColor="green"
              color="#fff"
              padding="10px 24px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600 text-center"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default CourseDescription;
