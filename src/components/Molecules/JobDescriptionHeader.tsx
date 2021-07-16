import React from "react";
import { EichTwo } from "../Atoms/EichTwo";
import { Eichthree } from "../Atoms/Eichthree";
import { Image } from "../Atoms/Image";
import { Text } from "../Atoms/Text";

export const JobDescriptionHeader = () => {
  return (
    <header className="header-description">
      <article>
        {" "}
        <Image
          src={"https://www.placecage.com/50/50"}
          type={"enterprise-avatar"}
          alt={"Logo empresarial"}
        />
        <EichTwo
          classes={"header-description__title"}
          text={"Frontend Developet"}
        />
        <Eichthree text={'Cuevana3'}/>
        <section className="tags-section">
          <Text classes={"header_description__tag"} text={"remote"} />
          <Text classes={"header_description__tag"} text={"remote"} />
          <Text classes={"header_description__tag"} text={"remote"} />
          <Text classes={"header_description__tag"} text={"remote"} />
        </section>
      </article>
    </header>
  );
};
