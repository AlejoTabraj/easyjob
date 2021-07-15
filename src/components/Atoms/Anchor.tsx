import React from "react";

export const Anchor = ({ href, classes, children }: any) => {
  return <a href={href} className={classes}>{children}</a>;
};
