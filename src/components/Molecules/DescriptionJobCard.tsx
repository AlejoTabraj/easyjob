import React from "react";
import { Eichthree } from "../Atoms/Eichthree";
import { Text } from "../Atoms/Text";
import { Anchor } from "../Atoms/Anchor";

export const DescriptionJobCard = () => {
  return (
    <section className="card-description">
      <Eichthree classes={"job-title"} text={"Graphic Designer"}></Eichthree>
      <Text classes={"enterprise-name"} text={"Cuevana3"}></Text>
      <Text classes={"location-type"} text={"Buenos Aires | FullTime"}></Text>
      <section className="tags-section">
        <Text classes={"tag tag-time"} text={"5 days ago"}></Text>
        <Text classes={"tag tag-applied"} text={"17 applied"}></Text>
        <Anchor href={"#"} classes={"tag-anchor"}>
          <Text classes={"tag"} text={"Apply Now"}></Text>
        </Anchor>
      </section>
    </section>
  );
};
