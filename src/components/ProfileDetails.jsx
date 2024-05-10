import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfileDetails } from "../store/slices/userDetails/userDetailSlice";
import { Button, ProfileForm, RoundButton } from "./index";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ProfileDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    email: "",
    phoneNumber: "",
    linkedInProfile: "",
    githubProfile: "",
    website: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const details = useSelector((state) => state.userDetails);
  console.log(details.details.profile_details);
  useEffect(() => {
    if (details.details.profile_details) {
      setProfileData(details.details.profile_details);
    }
  }, [details.details.profile_details]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfileDetails(profileData));

    setSubmitted(true);
    navigate("/user-details/education");
  };

  const handleNextClick = () => {
    navigate("/user-details/education");
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl mb-6 font-lato font-semibold text-customBlack">
        Profile details
      </h2>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <ProfileForm data={profileData} onInputChange={handleInputChange} />
        <div className="mb-6 text-center ">
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
              className="bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-customGray/20 mr-20 disabled:pointer-events-none"
              disabled
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

export default ProfileDetails;
