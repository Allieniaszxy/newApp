import { motion as Motion } from "framer-motion";

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

  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <section className="py-16 px-4 bg-gray-100 text-center">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl text-blue-400 mb-7"
        >
          What our students say
        </Motion.h2>

        <Motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-7"
        >
          {testimonials.map((testimonial, index) => (
            <Motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
              className="shadow-md bg-white rounded-2xl w-[300px] text-left flex flex-col items-center p-4 cursor-pointer"
            >
              <Motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-20 h-20 rounded-full mb-4 overflow-hidden"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </Motion.div>

              <p className="text-[16px] mb-2 text-gray-700">
                {testimonial.feedback}
              </p>

              <div className="text-center mt-2">
                <p className="text-[18px] mb-1 text-blue-400 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-[16px] text-gray-500">
                  {testimonial.position}
                </p>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </section>
    </div>
  );
};

export default Testimonials;
