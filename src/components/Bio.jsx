import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, RoundButton, TextArea } from "./index";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { addAboutYou } from "../store/slices/userDetails/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Bio() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const detail = useSelector((state) => state.userDetails);
  const [bio, setBio] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log(detail.details.about_you);

  useEffect(() => {
    if (detail.details.about_you) {
      setBio(detail.details.about_you);
    }
  }, [detail.details.about_you]);

  const handleInputChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = () => {
    if (bio) {
      const updatedBio = bio;
      dispatch(addAboutYou(updatedBio));
      setBio(updatedBio);
    }
    setSubmitted(true);
    navigate("/download-resume");
  };

  const handlePrevClick = () => {
    navigate("/user-details/achievements");
  };

  const handleNextClick = () => {
    navigate("/download-resume");
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl mb-6 font-lato font-semibold text-customBlack">
        About yourself
      </h2>

      <div className="mb-8">
        <TextArea
          label="Bio"
          className=""
          placeholder="Describe yourself"
          value={bio}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-12">
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
            className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-customGray/20 ml-20"
            onClick={handleNextClick}
          >
            <IoIosArrowForward className="inline-block px-1 text-3xl" />
          </RoundButton>
        </div>
      )}
    </div>
  );
}

export default Bio;
