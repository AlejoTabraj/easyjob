import React from "react";
import { EnterpriseAvatar } from "../Molecules/EnterpriseAvatar";
import { DescriptionJobCard } from "../Molecules/DescriptionJobCard";

export const JobCard = () => {
  return (
    <article className="job-card">
      <aside className="job-car__image">
        <EnterpriseAvatar />
      </aside>
      <DescriptionJobCard></DescriptionJobCard>
    </article>
  );
};
