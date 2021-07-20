import axiosAuth from "./axiosAuth";

const getJobs = () => {
  return axiosAuth
    .get(
      "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15"
    )
    .then((res) => res)
    .catch((err) => err);
};

export default getJobs;
