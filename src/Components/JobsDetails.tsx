import { useLoaderData } from "react-router-dom";

import { Job } from "../pages/Jobs";
const JobsDetails = () => {
  const jobsDetail = useLoaderData() as Job;
  return (
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta corporis ad magnam tempora, delectus cupiditate ducimus maiores cumque quis. Nam, praesentium? Porro sequi assumenda architecto, debitis modi rem dolorum nostrum!

      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobsDetails;
