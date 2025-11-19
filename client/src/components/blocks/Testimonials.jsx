const Testimonials = () => {
  const testimonials = [
    {
      name: "Alice Johnson",
      feedback:
        "This platform has transformed my learning experience. The courses are well-structured and the instructors are top-notch!",
      image: "./assets/images/Sophia.jpg",
      position: "Student",
    },
    {
      name: "Bob Smith",
      feedback:
        "I love the flexibility of learning at my own pace. The variety of courses available has helped me gain new skills for my career.",
      image: "./assets/images/Sophia.jpg",
      position: "Professional",
    },
    {
      name: "Catherine Lee",
      feedback:
        "The community and support from instructors make this platform stand out. I've made great connections while learning here.",
      image: "./assets/images/Sophia.jpg",
      position: "Entrepreneur",
    },
  ];

  return (
    <div>
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl text-blue-400 mb-7">What our students say</h2>
        <div className="flex flex-wrap justify-center gap-7 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="shadow-md bg-white rounded-2xl w-[300px] text-left flex flex-col items-center p-4"
            >
              <div className="w-[80px] h-[80px] rounded-full mb-4 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full complete h-full rounded-full object-cover object-center"
                />
              </div>
              <p className="text-[16px] mb-2">{testimonial.feedback}</p>
              <div className="text-center">
                <p className="text-[18px] mb-2 text-blue-400">
                  {testimonial.name}
                </p>
                <p className="text-[16px] mb-2 text-gray-500">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
