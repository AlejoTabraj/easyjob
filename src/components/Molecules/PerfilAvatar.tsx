import React from "react";
import { Anchor } from "../Atoms/Anchor";
import { Image } from "../Atoms/Image";


export const PerfilAvatar = ({ href }:any) => {
  return (
    <Anchor href={href}>
      <Image src={'https://www.placecage.com/50/50'} alt={"perfil photo"} type={"avatar"} />
    </Anchor>
  );
};
