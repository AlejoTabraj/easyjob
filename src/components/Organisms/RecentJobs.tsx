import React from "react";
import { Subtitle } from "../Molecules/Subtitle";
import { JobCard } from "./JobCard";

export const RecentJobs = () => {
  return (
    <section className="recent-jobs">
      <header>
        <Subtitle />
      </header>
      <section className='recent-jobs__section'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </section>
  );
};
