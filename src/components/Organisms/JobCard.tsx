import React from "react";
import { EnterpriseAvatar } from "../Molecules/EnterpriseAvatar";
import { DescriptionJobCard } from "../Molecules/DescriptionJobCard";
import { Link } from "react-router-dom";

export const JobCard = () => {
  return (
    <Link to="/jobs/1">
      <article className="job-card">
        <aside className="job-car__image">
          <EnterpriseAvatar />
        </aside>
        <DescriptionJobCard></DescriptionJobCard>
      </article>
    </Link>
  );
};
