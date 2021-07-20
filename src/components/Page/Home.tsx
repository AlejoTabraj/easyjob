import React, { useEffect } from "react";
import { Header } from "../Organisms/Header";
import { RecentJobs } from "../Organisms/RecentJobs";
import { JobsSection } from "../Organisms/JobsSection";
import getJobs from "../../services/getJobs";

export const Home = () => {
  useEffect(() => {
    getJobs()
      .then((res) => console.log(res))
      .catch((err) => console.log('ko',err));
  }, []);
  return (
    <>
      <Header />
      <RecentJobs />
      <JobsSection />
    </>
  );
};
