import React, { useEffect, useState } from "react";
import { Button, Input, RoundButton } from "./index";
import { BsPlusLg, BsTrash } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addSkillsDetails } from "../store/slices/userDetails/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Skills() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.userDetails);
  const [skillData, setSkillData] = useState([]);
  const [skill, setSkill] = useState("");
  const [submitted, setSubmitted] = useState(false);
  console.log(details.details.skills);

  useEffect(() => {
    if (details.details.skills) {
      setSkillData(details.details.skills);
    }
  }, [details.details.skills]);

  const handleAddMore = () => {
    if (skill) {
      const updatedSkillData = [...skillData];
      updatedSkillData.push(skill);
      setSkillData(updatedSkillData);
    }
    setSkill("");
    setSubmitted(false);
  };
  const handleSubmit = () => {
    if (skill || skillData.length > 0) {
      const updatedSkillData = [...skillData];
      if (skill) {
        updatedSkillData.push(skill);
      }
      dispatch(addSkillsDetails(updatedSkillData));
      setSkillData(updatedSkillData);
    }
    setSkill("");
    setSubmitted(true);
    navigate("/user-details/projects");
    //dispatch(addSkillsDetails(skillData));
  };

  const handleDelete = (index) => {
    const newSkillData = skillData.filter((_, i) => i !== index);
    dispatch(addSkillsDetails(newSkillData));
    setSkillData(newSkillData);
  };

  const handlePrevClick = () => {
    navigate("/user-details/work");
  };

  const handleNextClick = () => {
    navigate("/user-details/projects");
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl mb-6 font-lato font-semibold text-customBlack">
        Key skills
      </h2>
      <div>
        {submitted ? (
          <div className="mb-4">
            {skillData.length > 0 &&
              skillData.map((skill, index) => (
                <div key={index} className="flex items-end gap-4 mb-4">
                  <Input
                    label="Skill"
                    className=""
                    name=""
                    placeholder="python"
                    value={skill}
                    disabled
                  />
                  <span className="inline-block pb-1">
                    <Button
                      onClick={() => handleDelete(index)}
                      className="bg-white text-customRed  outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                    >
                      <BsTrash className="inline-block text-xl text-customRed" />
                    </Button>
                  </span>
                </div>
              ))}
          </div>
        ) : (
          <>
            <div className="mb-4">
              {skillData.length > 0 &&
                skillData.map((skill, index) => (
                  <div key={index} className="flex items-end gap-4 mb-4">
                    <Input
                      label="Skill"
                      className=""
                      name=""
                      placeholder="python"
                      value={skill}
                      disabled
                    />
                    <span className="inline-block pb-1">
                      <Button
                        onClick={() => handleDelete(index)}
                        className="bg-white text-customRed  outline outline-1 outline-red-50 py-1 px-2 ring-1 focus:ring-customRed"
                      >
                        <BsTrash className="inline-block text-xl text-customRed" />
                      </Button>
                    </span>
                  </div>
                ))}
            </div>
            <div className="flex items-end gap-4">
              <Input
                label="Skill"
                className=""
                name=""
                placeholder="python"
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
              />
            </div>
          </>
        )}
      </div>

      <div className="my-8">
        <Button
          onClick={handleAddMore}
          className="text-lightBlue-default capitalize focus:ring-opacity-0 focus:ring-transparent flex items-center gap-2 group hover:underline"
        >
          <BsPlusLg className="inline-block text-xl group-hover:underline" />
          Add more skills
        </Button>
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

export default Skills;
