import MockResume from "../assets/mock_resume.svg";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user-details/profile");
  };
  return (
    <div className="py-12">
      <div className="flex gap-32 items-center">
        <section className="w-1/2">
          <div>
            <h1 className="font-lato font-semibold text-customBlack text-5xl leading-tight">
              Free resume maker for Programmers
            </h1>
            <p className="font-lato font-normal text-customBlack text-xl my-10">
              Pick a template, fill in the blanks and create professional
              resume.
            </p>
          </div>

          <div>
            <Button
              onClick={handleClick}
              className="bg-lightBlue-default py-3 px-8 text-lg hover:bg-lightBlue-dark focus:ring-lightBlue-dark"
            >
              Create Your Resume
            </Button>
          </div>
        </section>
        <section className="w-1/2">
          <div className="w-4/5">
            <img src={MockResume} alt="mock_resume" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
