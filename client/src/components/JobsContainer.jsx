import useAppContext from "../hooks/useAppContext";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";



const JobsContainer = () => {
  const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [])

  if (isLoading) {
    return <p>Loading</p>
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display!</h2>
      </Wrapper>
    )
  }
  


  return (
    <div>JobContainer</div>
  )
}

export default JobsContainer