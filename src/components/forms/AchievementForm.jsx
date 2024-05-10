import React from "react";
import { Input, TextArea } from "../index";

function AchievementForm({ data, onInputChange }) {
  return (
    <div className="flex flex-wrap gap-7 items-center ">
      <Input
        label="Award/Achievement Name"
        name="awardName"
        className="mr-20"
        placeholder="supreme hacker"
        value={data.awardName}
        onChange={onInputChange}
      />
      <Input
        label="Awarder"
        className="mr-20"
        name="awarder"
        placeholder="Hackneyy"
        value={data.awarder}
        onChange={onInputChange}
      />
      <Input
        label="Award Date"
        type="date"
        className="mr-20"
        name="awardDate"
        placeholder="July 2020"
        value={data.awardDate}
        onChange={onInputChange}
      />
    </div>
  );
}

export default AchievementForm;
