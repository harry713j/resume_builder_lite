import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkDetails } from "../store/slices/userDetails/userDetailSlice";
import { Button, WorkForm, RoundButton } from "./index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function WorkExperience() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [workData, setWorkData] = useState({
    companyName: "",
    jobTitle: "",
    jobLocation: "",
    jobResponsibility: "",
    startDate: "",
    endDate: "",
  });

  //TODO: Add an delete button for each form and for skip button

  const [workInformation, setWorkInformation] = useState([]);

  const details = useSelector((state) => state.userDetails);

  const [submitted, setSubmitted] = useState(false);
  console.log(details.details.work_experience);

  useEffect(() => {
    if (details.details.work_experience) {
      setWorkInformation(details.details.work_experience);
    }
  }, [details.details.work_experience]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setWorkData({
      ...workData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let updatedWorkInformation = [];
    if (workData) {
      const newWorkData = { ...workData };
      updatedWorkInformation = [...workInformation, newWorkData];
      setWorkInformation(updatedWorkInformation);
      setWorkData({
        companyName: "",
        jobTitle: "",
        jobLocation: "",
        jobResponsibility: "",
        startDate: "",
        endDate: "",
      });

      dispatch(addWorkDetails(updatedWorkInformation));

      setSubmitted(true);
      navigate("/user-details/skills");
    }
  };

  const handleAddClick = () => {
    if (workData) {
      const newWorkData = { ...workData };
      setWorkInformation([...workInformation, newWorkData]);
      setWorkData({
        companyName: "",
        jobTitle: "",
        jobLocation: "",
        jobResponsibility: "",
        startDate: "",
        endDate: "",
      });
    }
    // console.log(workInformation);
    // setSubmitted(false);
  };

  const handleDelete = (index) => {
    const newWorkInfo = workInformation.filter((_, i) => i !== index);
    dispatch(addWorkDetails(newWorkInfo));
    setWorkInformation(newWorkInfo);
  };

  const handlePrevClick = () => {
    navigate("/user-details/education");
  };

  const handleNextClick = () => {
    navigate("/user-details/skills");
  };

  const handleSkip = () => {
    navigate("/user-details/skills");
  };

  return (
    <div className="py-12">
      <div className="flex justify-end">
        <Button
          className="group flex items-center bg-white text-lightBlue-default 
        py-1 px-3 bg-transparent hover:underline"
          onClick={handleSkip}
        >
          Skip
          <MdOutlineKeyboardDoubleArrowRight className="inline-block text-2xl transition-all duration-300 group-hover:translate-x-3 group-hover:underline" />
        </Button>
      </div>
      <h2 className="text-4xl mb-6 font-lato font-semibold text-customBlack">
        Work experience
      </h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {submitted ? (
          <div>
            {workInformation.map((detail, index) => (
              <div key={index}>
                <WorkForm data={detail} onInputChange={handleInputChange} />
                <span className="inline-block pb-1">
                  <Button
                    onClick={() => handleDelete(index)}
                    className="bg-white text-customRed mt-4 outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                  >
                    <span className="inline-block font-normal text-customRed">
                      Delete
                    </span>
                  </Button>
                </span>
                <span className="w-full inline-block h-[.5px] bg-customGray/50 mb-12"></span>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {workInformation.map((detail, index) => (
              <div key={index}>
                <WorkForm data={detail} onInputChange={handleInputChange} />
                <span className="inline-block pb-1">
                  <Button
                    onClick={() => handleDelete(index)}
                    className="bg-white text-customRed mt-4  outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                  >
                    <span className="inline-block font-normal text-customRed">
                      Delete
                    </span>
                  </Button>
                </span>
                <span className="w-full inline-block h-[.5px] bg-customGray/50 mb-12"></span>
              </div>
            ))}
            <WorkForm data={workData} onInputChange={handleInputChange} />
          </div>
        )}

        <div className="mb-16 w-full flex justify-end pr-20">
          <Button
            className="text-lightBlue-default focus:ring-transparent flex items-center gap-1 group hover:underline"
            onClick={handleAddClick}
          >
            <BsPlusLg className="inline-block text-xl group-hover:underline" />
            Add More
          </Button>
        </div>
        <div className="mb-12 text-center">
          <Button
            type="submit"
            className={`uppercase bg-lightBlue-default py-2 px-6 hover:bg-lightBlue-dark focus:ring-lightBlue-dark`}
          >
            Submit
          </Button>
        </div>
        {submitted && (
          <div className="flex items-center justify-center">
            <RoundButton
              className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-customGray/20 mr-20"
              onClick={handlePrevClick}
            >
              <IoIosArrowBack className="inline-block px-1 text-3xl" />
            </RoundButton>
            <RoundButton
              className="bg-gray-200 hover:bg-gray-300 ml-20"
              onClick={handleNextClick}
            >
              <IoIosArrowForward className="inline-block px-1 text-3xl" />
            </RoundButton>
          </div>
        )}
      </form>
    </div>
  );
}

export default WorkExperience;
