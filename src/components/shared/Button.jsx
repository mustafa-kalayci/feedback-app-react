import React from "react";
import { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";
function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

export default Button;
