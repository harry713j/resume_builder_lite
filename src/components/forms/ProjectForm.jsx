import React from "react";
import { Input, TextArea } from "../index";

function ProjectForm({ data, onInputChange }) {
  return (
    <div className="flex flex-wrap gap-7 items-center ">
      <Input
        label="Project Name"
        name="projectName"
        className="mr-20"
        placeholder="fun chat"
        value={data.projectName}
        onChange={onInputChange}
        required
      />
      <Input
        label="Link to project(optional)"
        type="url"
        className="mr-20"
        name="projectLink"
        placeholder="http://funchat.com"
        value={data.projectLink}
        onChange={onInputChange}
      />
      <TextArea
        label="Project Summary"
        className="mr-20"
        name="projectSummary"
        placeholder="A texting app and fun etc."
        value={data.projectSummary}
        onChange={onInputChange}
        required
      />
      <Input
        label="Technologies Used"
        className="mr-20"
        name="techUsed"
        placeholder="Enter technologies separated by comma e.g. Vue, C++"
        value={data.techUsed}
        onChange={onInputChange}
      />
    </div>
  );
}

export default ProjectForm;
