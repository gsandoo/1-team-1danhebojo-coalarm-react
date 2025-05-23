/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowsRightArrow3 = ({
  color = "black",
  opacity = "unset",
  className,
}) => {
  return (
    <svg
      className={`arrows-right-arrow-3 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.88663 7.52679L7.05996 4.70013C6.99799 4.63764 6.92425 4.58805 6.84301 4.5542C6.76177 4.52036 6.67464 4.50293 6.58663 4.50293C6.49862 4.50293 6.41148 4.52036 6.33024 4.5542C6.249 4.58805 6.17527 4.63764 6.1133 4.70013C5.98913 4.82504 5.91943 4.994 5.91943 5.17013C5.91943 5.34625 5.98913 5.51522 6.1133 5.64013L8.47329 8.00013L6.1133 10.3601C5.98913 10.485 5.91943 10.654 5.91943 10.8301C5.91943 11.0063 5.98913 11.1752 6.1133 11.3001C6.17559 11.3619 6.24947 11.4108 6.33069 11.444C6.41192 11.4772 6.49889 11.494 6.58663 11.4935C6.67437 11.494 6.76134 11.4772 6.84257 11.444C6.92379 11.4108 6.99767 11.3619 7.05996 11.3001L9.88663 8.47346C9.94911 8.41149 9.99871 8.33775 10.0326 8.25651C10.0664 8.17527 10.0838 8.08814 10.0838 8.00013C10.0838 7.91212 10.0664 7.82498 10.0326 7.74374C9.99871 7.6625 9.94911 7.58877 9.88663 7.52679Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

ArrowsRightArrow3.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
