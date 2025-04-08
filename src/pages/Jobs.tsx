import { Link, useLoaderData } from "react-router-dom";
interface Job {
  id: number;
  title: string;
  Salary: number;
  Location: string;
}

const Jobs = () => {
  const jobData = useLoaderData() as Job[];
  return (
    
      <div className="jobs">
      {jobData.map((job) => {
        return <Link to={'/jobs'}>
        <h4>{job.title}</h4>
        <p>{job.Location}</p>
        </Link>
        
})}
    </div>
    
  
  );
};

export default Jobs;
