import Testimonials from "../../components/blocks/Testimonials";
import Button from "../../components/reusable/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-28 text-center">
        <div className="max-w-3xl flex flex-col mx-auto items-center px-4">
          <h1 className="text-4xl mb-5">Welcome to our E-learning platform</h1>
          <p className="text-[18px] text-gray-500 mb-10">Learn, Grow, Excel</p>
          <Button
            title="Get Started"
            bgColor="#2563eb"
            color="#fff"
            padding="10px 24px"
            margin="10px 0"
            className="rounded-lg hover:bg-blue-600 text-center"
            onClick={() => navigate("/courses")}
          />
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
