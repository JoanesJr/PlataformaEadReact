import React from "react";
import style from "./errors.module.css";

const Errors = ({errors, error}) => {
    let errorsMsg = [];
    if (!error) {
        errorsMsg = errors.map((obj) => {
        return Object.keys(obj).map((key) => {
            return obj[key];
        });
        });
    }
   

  return (
    <div className={style.errorContainer}>
      {!error &&
        errorsMsg.map((err) =>
          err.map((msg) => <small key={Math.random() * 1000}>{msg}</small>)
        )}

      {error && <small>{error}</small>}
    </div>
  );
}
export default Errors;
