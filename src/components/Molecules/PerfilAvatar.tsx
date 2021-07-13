import React from "react";
import { Image } from "../Atoms/Image";



export const PerfilAvatar = ({ href }:any) => {
  return (
    <a href={href}>
      <Image src={'https://www.placecage.com/50/50'} alt={"perfil photo"} type={"avatar"} />
    </a>
  );
};
