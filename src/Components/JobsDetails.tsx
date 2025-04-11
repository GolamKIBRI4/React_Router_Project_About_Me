import { useLoaderData } from "react-router-dom";
import JobDescription from "./JobDescription";

import { Job } from "../pages/Jobs";

const JobsDetails = () => {
  const jobsDetail = useLoaderData() as Job;

  return (
    <>
      <div className="jobDetails">
        <p>
          <b>Job Tittle:</b>
          {jobsDetail.title}
        </p>
        <p>
          <b>Salary:</b>
          {jobsDetail.Salary}
        </p>
        <p>
          <b>Job Location:</b>
          {jobsDetail.Location}
        </p>
        <p>
          <b>Description:</b>
          <JobDescription description={jobsDetail.description} />
        </p>
        <button>Apply Now</button>
      </div>
    </>
  );
};

export default JobsDetails;
