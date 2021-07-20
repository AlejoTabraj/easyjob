import React from "react";
import { EichTwo } from "../Atoms/EichTwo";
import { Text } from "../Atoms/Text";

export const JobDescription = () => {
  return (
    <article className="job-description">
      <EichTwo classes={"subtitle"} text={"Description"} />
      <Text classes={"text"} text={"We are looking for a pet whit soft hair"} />

      <EichTwo classes={"subtitle"} text={"Responsabilidades"} />
      <Text classes={"text"} text={"We are looking for a pet whit soft hair"} />
      <ul>
        <li>Hbuscamos developers</li>
        <li>Hbuscamos developers</li>
        <li>Hbuscamos developers</li>
      </ul>
      <EichTwo classes={"subtitle"} text={"Habilidades"} />
      <Text classes={"text"} text={"We are looking for a pet whit soft hair"} />
    </article>
  );
};
