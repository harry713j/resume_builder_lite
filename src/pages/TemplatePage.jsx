import { Button } from "../components";
import MockResume from "../assets/mock_resume.svg";
import { useNavigate } from "react-router-dom";

function TemplatePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user-details/profile");
  };
  return (
    <div className="pt-12 pb-10">
      <div className="flex flex-col gap-12 items-center">
        <div className="w-1/5">
          <img src={MockResume} alt="mock_resume" />
        </div>
        <div>
          <Button
            onClick={handleClick}
            className="bg-lightBlue-default py-2 px-6 text-lg hover:bg-lightBlue-dark focus:ring-lightBlue-dark"
          >
            Create Your Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;
