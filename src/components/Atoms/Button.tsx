import React from "react";

export const Button = ({ classes, onClickHandler, children }: any) => {
  return (
    <button className={classes} onClick={onClickHandler}>
      {children}
    </button>
  );
};
