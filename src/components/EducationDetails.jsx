import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducationDetails } from "../store/slices/userDetails/userDetailSlice";
import { RoundButton, Button } from "./index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import EducationForm from "./forms/EducationForm";
import { useNavigate } from "react-router-dom";

function EducationDetails() {
  //TODO: After the edit button clicked the details are not fetching
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [educationInfo, setEducationInfo] = useState([]);
  const [educationData, setEducationData] = useState({
    instituteName: "",

    degreeName: "",
    major: "",
    cgpa: "",
    startDate: "",
    endDate: "",
  });

  const details = useSelector((state) => state.userDetails);

  const [submitted, setSubmitted] = useState(false);
  console.log(details.details.education_details);

  useEffect(() => {
    if (details.details.education_details) {
      setEducationInfo(details.details.education_details);
    }
  }, [details.details.education_details]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEducationData({
      ...educationData,
      [name]: value,
    });
  };

  const handleAddClick = () => {
    if (educationData) {
      const updatedEducationInfo = [...educationInfo];
      updatedEducationInfo.push(educationData);
      setEducationInfo(updatedEducationInfo);
      setEducationData({
        instituteName: "",

        degreeName: "",
        major: "",
        cgpa: "",
        startDate: "",
        endDate: "",
      });
    }
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (educationData) {
      const updatedEducationInfo = [...educationInfo];
      updatedEducationInfo.push(educationData);
      dispatch(addEducationDetails(updatedEducationInfo));
      setEducationInfo(updatedEducationInfo);
      setEducationData({
        instituteName: "",

        degreeName: "",
        major: "",
        cgpa: "",
        startDate: "",
        endDate: "",
      });
    }

    setSubmitted(true);
    navigate("/user-details/work");
  };

  const handleDelete = (index) => {
    const newEducationInfo = educationInfo.filter((_, i) => i !== index);
    dispatch(addEducationDetails(newEducationInfo));
    setEducationInfo(newEducationInfo);
  };

  const handlePrevClick = () => {
    navigate("/user-details/profile");
  };

  const handleNextClick = () => {
    navigate("/user-details/work");
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl mb-6 font-lato font-semibold text-customBlack">
        Education details
      </h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        {submitted ? (
          <div>
            {educationInfo.map((detail, index) => (
              <div key={index}>
                <EducationForm
                  data={detail}
                  onInputChange={handleInputChange}
                />
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
          </div>
        ) : (
          <div>
            {educationInfo.map((detail, index) => (
              <div key={index}>
                <EducationForm
                  data={detail}
                  onInputChange={handleInputChange}
                />
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
            <EducationForm
              data={educationData}
              onInputChange={handleInputChange}
            />
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
        <div className="mb-6 text-center">
          <Button
            type="submit"
            className={`uppercase bg-lightBlue-default py-2 px-6 hover:bg-lightBlue-dark focus:ring-lightBlue-dark `}
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

export default EducationDetails;
