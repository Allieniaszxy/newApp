import Testimonials from "../../components/blocks/Testimonials";
import Button from "../../components/reusable/Button";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="py-28 text-center"
      >
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl flex flex-col mx-auto items-center px-4"
        >
          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl mb-5 font-bold"
          >
            Welcome to our E-learning platform
          </Motion.h1>

          <Motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[18px] text-gray-500 mb-10"
          >
            Learn, Grow, Excel
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button
              title="Get Started"
              bgColor="#2563eb"
              color="#fff"
              padding="10px 24px"
              margin="10px 0"
              className="rounded-lg hover:bg-blue-600 text-center"
              onClick={() => navigate("/courses")}
            />
          </Motion.div>
        </Motion.div>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Testimonials />
      </Motion.div>
    </div>
  );
};

export default Home;
