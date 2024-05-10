import { Input, TextArea } from "../index";

function WorkForm({ data, onInputChange }) {
  return (
    <div className="flex flex-wrap gap-7 justify-center items-center mb-10">
      <Input
        label="Company Name"
        className="mr-20"
        name="companyName"
        placeholder="Amazon"
        value={data.companyName}
        onChange={onInputChange}
        required
      />
      <Input
        label="Job title"
        className="mr-20"
        name="jobTitle"
        placeholder="Project Manager"
        value={data.jobTitle}
        onChange={onInputChange}
        required
      />
      <Input
        label="Job Location"
        className="mr-20"
        name="jobLocation"
        placeholder="Mountain view, CA"
        value={data.jobLocation}
        onChange={onInputChange}
        required
      />
      <TextArea
        label="Job Responsibility"
        className="mr-20"
        name="jobResponsibility"
        placeholder="Did cool stuffs..."
        value={data.jobResponsibility}
        onChange={onInputChange}
        required
      />

      <Input
        type="date"
        label="Start Date"
        className="mr-20 cursor-pointer"
        name="startDate"
        placeholder="May 2022"
        value={data.startDate}
        onChange={onInputChange}
      />
      <Input
        type="date"
        label="End Date"
        className="mr-20 cursor-pointer"
        name="endDate"
        placeholder="August 2023"
        value={data.endDate}
        onChange={onInputChange}
      />
    </div>
  );
}

export default WorkForm;
