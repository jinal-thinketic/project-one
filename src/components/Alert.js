import React from "react";

export default function Alert(props) {
  const { alert } = props;

  const capitalize = (word = "") => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  return (
    alert && (
        <div
          className={`alert alert-${alert?.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitalize(alert?.type)} : {alert?.msg}
          </strong>
        </div>
      )
  );
}
