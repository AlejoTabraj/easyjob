import React from "react";

export const Image = ({ src, alt, type }:any) => {
  return <img src={src} alt={alt} className={type} />;
};
