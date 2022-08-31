import {
  Loading,
  StatsContainer,
  ChartsContainer,
} from "../../components";
import useAppContext from "../../hooks/useAppContext";
import { useEffect } from "react";



const Stats = () => {
  const { showStats, isLoading, monthlyApplications } = useAppContext();

  useEffect(() => {
    showStats();
  },[]);

  if (isLoading) {
    return <Loading center />
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
};

export default Stats;
