import React from "react";
import { Header } from "../Organisms/Header";
import { EichTwo } from "../Atoms/EichTwo";
import { JobCard } from "../Organisms/JobCard";

export const Jobs = () => {
  return (
    <header className="header-jobs">
      
      <Header />
      <section className="wrapper">
        <EichTwo class={"subtitle"} text={"Jobs"} />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </header>
  );
};
