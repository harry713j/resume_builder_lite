import React from "react";
import { Button, Resume } from "../components/index";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";

function DownloadPage() {
  //TODO: The edit feature should include
  const userDetails = useSelector((state) => state.userDetails);
  // const navigate = useNavigate();
  const {
    profile_details,
    education_details,
    work_experience,
    skills,
    projects,
    achievement,
    about_you,
  } = userDetails.details;

  // const handleEdit = () => {
  //   navigate("/user-details/profile");
  // };
  return (
    <div>
      <div className="flex justify-center my-12 ">
        <PDFViewer width="1100" height="800">
          <Resume
            profile_details={profile_details}
            education_details={education_details}
            work_experience={work_experience}
            skills={skills}
            projects={projects}
            achievement={achievement}
            about_you={about_you}
          />
        </PDFViewer>
      </div>

      <div className="flex items-center gap-16 justify-center">
        {/* <Button
          className="capitalize bg-customGreen-default py-2 px-6 text-lg hover:bg-customGreen-dark focus:ring-customGreen-dark"
          onClick={handleEdit}
        >
          edit
        </Button> */}
        <PDFDownloadLink
          document={
            <Resume
              profile_details={profile_details}
              education_details={education_details}
              work_experience={work_experience}
              skills={skills}
              projects={projects}
              achievement={achievement}
              about_you={about_you}
            />
          }
          fileName={`${profile_details?.firstName}_${profile_details?.lastName}'s_resume.pdf`}
        >
          {({ blob, url, loading, error }) => (
            <Button className="capitalize flex items-center gap-1 bg-lightBlue-default py-2 px-6 text-lg hover:bg-lightBlue-dark focus:ring-lightBlue-dark">
              {loading ? "loading document..." : "download"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default DownloadPage;
