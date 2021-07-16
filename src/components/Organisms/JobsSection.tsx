import React from "react";
import { Subtitle } from "../Molecules/Subtitle";
import { JobCard } from "./JobCard";

export const JobsSection = () => {
  return (
    <section className="jobs">
      <header>
        <Subtitle />
      </header>
      <section className='jobs__section'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </section>
  );
};
