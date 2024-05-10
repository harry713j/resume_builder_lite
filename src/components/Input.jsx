/* eslint-disable react/display-name */
import React, { useId } from "react";

const Input = React.forwardRef(
  ({ type = "text", label, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col ">
        {label && (
          <label
            className="inline-block font-lato font-medium text-lg text-customBlack/60 mb-1.5"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={`${className}  inline-block bg-white w-[400px] h-10 py-3 px-6 font-lato text-base text-customBlack/80 rounded-md
           border-[1.5px] border-customGray focus:outline-1 focus:outline-lightBlue-default placeholder:font-lato placeholder:text-base
            placeholder:text-customGray/40 placeholder:italic `}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
