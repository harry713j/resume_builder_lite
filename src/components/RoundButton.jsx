/* eslint-disable react/display-name */
import { forwardRef } from "react";

const RoundButton = forwardRef(
  ({ children, type = "button", className = "", ...props }, ref) => {
    return (
      <button
        type={type}
        className={`${className} font-lato font-semibold duration-300 rounded-full
         text-customGray focus:bg-customGray/70 p-1.5`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default RoundButton;
