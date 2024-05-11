import { Input } from "../index";

function EducationForm({ data, onInputChange }) {
  return (
    <div className="flex flex-wrap gap-7 items-center mb-16">
      <Input
        label="School / College Name"
        className="mr-20"
        name="instituteName"
        placeholder="Princeton University"
        value={data.instituteName}
        onChange={onInputChange}
        required
      />

      <Input
        label="Degree"
        className="mr-20"
        name="degreeName"
        placeholder="BS"
        value={data.degreeName}
        onChange={onInputChange}
        required
      />
      <Input
        label="Major"
        className="mr-20"
        name="major"
        placeholder="Computer Science"
        value={data.major}
        onChange={onInputChange}
        required
      />
      <Input
        label="CGPA / Percentage"
        className="mr-20"
        name="cgpa"
        placeholder="9.1"
        value={data.cgpa}
        onChange={onInputChange}
        required
      />

      <Input
        type="date"
        label="Start Date"
        className="mr-20 cursor-pointer"
        name="startDate"
        placeholder="July 2017"
        value={data.startDate}
        onChange={onInputChange}
        required
      />
      <Input
        type="date"
        label="End Date"
        className="mr-20 cursor-pointer"
        name="endDate"
        placeholder="July 2017"
        value={data.endDate}
        onChange={onInputChange}
      />
    </div>
  );
}

export default EducationForm;
