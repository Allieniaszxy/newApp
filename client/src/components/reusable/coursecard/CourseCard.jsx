import React from "react";
import { server } from "../../../main";
import Button from "../Button";

const CourseCard = ({ course }) => {
  return (
    <div>
      <div className="shadow-md p-5 rounded-xl text-center w-[250px] transition-.5s hover:shadow-2xl flex items-center justify-center flex-col">
        <img
          src={`${server}/${course?.image}`}
          alt=""
          className="w-full h-[150px] object-cover rounded-xl mb-2.5"
        />
        <h3 className="text-[18px] mb-2.5">{course.title}</h3>
        <p className="text-[14px] text-gray-700 mb-2.5">
          Instructor - {course.createdBy}
        </p>
        <p className="text-[14px] text-gray-700 mb-2.5">
          Duration - {course.duration}
        </p>
        <p className="text-[14px] text-gray-700 mb-2.5">
          Price - {course.price}
        </p>
        <Button
          title="Get Started"
          bgColor="#2563eb"
          color="#fff"
          padding="10px 24px"
          margin="10px 0"
          className="rounded-lg hover:bg-blue-600 text-center"
        />
      </div>
    </div>
  );
};

export default CourseCard;
