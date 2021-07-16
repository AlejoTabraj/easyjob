import React from "react";
import { Header } from "../Organisms/Header";
import { RecentJobs } from "../Organisms/RecentJobs";
import { JobsSection } from "../Organisms/JobsSection";

export const Home = () => {
  return (
    <>
      <Header />
      <RecentJobs />
      <JobsSection />
    </>
  );
};
