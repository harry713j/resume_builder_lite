import React, { useEffect, useState } from "react";
import { ProjectForm, RoundButton, Button } from "./index";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { addProjectsDetails } from "../store/slices/userDetails/userDetailSlice";
import { useNavigate } from "react-router-dom";

function Projects() {
  //TODO: Add a delete button for each project and skip button
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);
  const [project, setProject] = useState({
    projectName: "",
    projectSummary: "",
    projectLink: "",
    techUsed: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const details = useSelector((state) => state.userDetails);

  console.log(details.details.projects);

  useEffect(() => {
    if (details.details.projects) {
      setProjectData(details.details.projects);
    }
  }, [details.details.projects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleAddMore = () => {
    if (project) {
      const updatedProjectData = [...projectData];
      updatedProjectData.push(project);
      setProjectData(updatedProjectData);
    }
    setProject({
      projectName: "",
      projectSummary: "",
      projectLink: "",
      techUsed: "",
    });
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (project) {
      const updatedProjectData = [...projectData];
      updatedProjectData.push(project);
      dispatch(addProjectsDetails(updatedProjectData));
      setProjectData(updatedProjectData);
    }
    setProject({
      projectName: "",
      projectSummary: "",
      projectLink: "",
      techUsed: "",
    });
    setSubmitted(true);
    navigate("/user-details/achievements");
  };

  const handleDelete = (index) => {
    const newProjectData = projectData.filter((_, i) => i !== index);
    dispatch(addProjectsDetails(newProjectData));
    setProjectData(newProjectData);
  };

  const handlePrevClick = () => {
    navigate("/user-details/skills");
  };

  const handleNextClick = () => {
    navigate("/user-details/achievements");
  };

  const handleSkip = () => {
    navigate("/user-details/achievements");
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
        Projects
      </h2>
      {submitted ? (
        <div>
          {projectData.map((detail, index) => (
            <div key={index}>
              <ProjectForm data={detail} onInputChange={handleInputChange} />
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
              <span className="w-full inline-block h-[.5px] bg-customGray/50 mt-8 mb-12"></span>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {projectData.map((detail, index) => (
            <div key={index}>
              <ProjectForm data={detail} onInputChange={handleInputChange} />
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
              <span className="w-full inline-block h-[.5px] bg-customGray/50 mt-8 mb-12"></span>
            </div>
          ))}
          <ProjectForm data={project} onInputChange={handleInputChange} />
        </div>
      )}
      <div className="flex justify-end my-8 pr-20">
        <Button
          onClick={handleAddMore}
          className="text-lightBlue-default capitalize focus:ring-opacity-0 focus:ring-transparent flex items-center gap-2 group hover:underline"
        >
          <BsPlusLg className="inline-block text-xl group-hover:underline" />
          Add more projects
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

export default Projects;
