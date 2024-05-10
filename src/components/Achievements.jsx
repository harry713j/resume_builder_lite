import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AchievementForm, Button, RoundButton } from "./index";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import { addAchievementDetails } from "../store/slices/userDetails/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Achievements() {
  //TODO: Add a delete button for each project and skip button
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.userDetails);
  const [achievementData, setAchievementData] = useState([]);
  const [achievement, setAchievement] = useState({
    awardName: "",
    awardDate: "",
    awarder: "",
  });
  const [submitted, setSubmitted] = useState(false);
  console.log(details.details.achievement);

  useEffect(() => {
    if (details.details.achievement) {
      setAchievementData(details.details.achievement);
    }
  }, [details.details.achievement]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAchievement({
      ...achievement,
      [name]: value,
    });
  };

  const handleAddMore = () => {
    if (achievement) {
      const updatedAchievementData = [...achievementData];
      updatedAchievementData.push(achievement);
      setAchievementData(updatedAchievementData);
    }
    setAchievement({
      awardName: "",
      awardDate: "",
      awarder: "",
    });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (achievement) {
      const updatedAchievementData = [...achievementData];
      updatedAchievementData.push(achievement);
      dispatch(addAchievementDetails(updatedAchievementData));
      setAchievementData(updatedAchievementData);
    }
    setAchievement({
      awardName: "",
      awardDate: "",
      awarder: "",
    });
    setSubmitted(true);
    navigate("/user-details/bio");
  };

  const handleDelete = (index) => {
    const newAchievementData = achievementData.filter((_, i) => i !== index);
    dispatch(addAchievementDetails(newAchievementData));
    setAchievementData(newAchievementData);
  };

  const handlePrevClick = () => {
    navigate("/user-details/projects");
  };

  const handleNextClick = () => {
    navigate("/user-details/bio");
  };

  const handleSkip = () => {
    navigate("/user-details/bio");
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
        Honors and Awards
      </h2>
      {submitted ? (
        <div>
          {achievementData.map((detail, index) => (
            <div key={index}>
              <AchievementForm
                data={detail}
                onInputChange={handleInputChange}
              />
              <span className="inline-block pb-1">
                <Button
                  onClick={() => handleDelete(index)}
                  className="bg-transparent text-customRed mt-4 outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                >
                  <span className="inline-block font-normal text-customRed">
                    Delete
                  </span>
                </Button>
              </span>
              <span className="w-full inline-block h-[.5px] bg-customGray/50 mt-8 mb-12"></span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {achievementData.map((detail, index) => (
            <div key={index}>
              <AchievementForm
                data={detail}
                onInputChange={handleInputChange}
              />
              <span className="inline-block pb-1">
                <Button
                  onClick={() => handleDelete(index)}
                  className="bg-transparent text-customRed mt-4  outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                >
                  <span className="inline-block font-normal text-customRed">
                    Delete
                  </span>
                </Button>
              </span>
              <span className="w-full inline-block h-[.5px] bg-customGray/50 mt-8 mb-12"></span>
            </div>
          ))}
          <AchievementForm
            data={achievement}
            onInputChange={handleInputChange}
          />
        </div>
      )}
      <div className="flex justify-end my-8 pr-20">
        <Button
          onClick={handleAddMore}
          className="text-lightBlue-default capitalize focus:ring-opacity-0 focus:ring-transparent flex items-center gap-2 group hover:underline"
        >
          <BsPlusLg className="inline-block text-xl group-hover:underline" />
          Add more achievements
        </Button>
      </div>
      <div className="mb-12 text-center">
        <Button
          onClick={handleSubmit}
          className="uppercase bg-lightBlue-default py-2 px-6 hover:bg-lightBlue-dark focus:ring-lightBlue-dark"
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
    </div>
  );
}

export default Achievements;
