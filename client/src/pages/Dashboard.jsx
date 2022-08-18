

const Dashboard = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/")
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard;