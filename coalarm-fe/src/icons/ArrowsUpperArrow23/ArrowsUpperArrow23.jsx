/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowsUpperArrow23 = ({
  color = "black",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`arrows-upper-arrow-23 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M16.9997 13.4098L12.7097 9.16982C12.6167 9.07609 12.5061 9.0017 12.3843 8.95093C12.2624 8.90016 12.1317 8.87402 11.9997 8.87402C11.8677 8.87402 11.737 8.90016 11.6151 8.95093C11.4933 9.0017 11.3827 9.07609 11.2897 9.16982L7.0497 13.4098C6.95598 13.5028 6.88158 13.6134 6.83081 13.7352C6.78004 13.8571 6.75391 13.9878 6.75391 14.1198C6.75391 14.2518 6.78004 14.3825 6.83081 14.5044C6.88158 14.6263 6.95598 14.7369 7.0497 14.8298C7.23707 15.0161 7.49052 15.1206 7.7547 15.1206C8.01889 15.1206 8.27234 15.0161 8.4597 14.8298L11.9997 11.2898L15.5397 14.8298C15.726 15.0146 15.9774 15.1187 16.2397 15.1198C16.3713 15.1206 16.5018 15.0954 16.6236 15.0456C16.7454 14.9958 16.8563 14.9225 16.9497 14.8298C17.0468 14.7402 17.1251 14.6322 17.1802 14.5122C17.2353 14.3921 17.2661 14.2623 17.2708 14.1302C17.2754 13.9982 17.2539 13.8666 17.2073 13.7429C17.1608 13.6193 17.0902 13.506 16.9997 13.4098Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

ArrowsUpperArrow23.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
