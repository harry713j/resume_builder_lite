/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Button = forwardRef(
  ({ children, type = "button", className = "", ...props }, ref) => {
    return (
      <button
        type={type}
        className={`${className} font-lato font-semibold duration-300 rounded-lg
         text-customWhite focus:ring-1 focus:ring-offset-2`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
