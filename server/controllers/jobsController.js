



const createJob = async (req, res) => {
  res.send('Create Job')
}

const getAllJobs = async (req, res) => {
  res.send('Get all jobs')
}

const deleteJob = async (req, res) => {
  res.send('Delete Job')
}

const updateJob = async (req, res) => {
  res.send('Update Job')
}

const showStats = async (req, res) => {
  res.send('Show stats')
}


export { createJob, getAllJobs, deleteJob, updateJob, showStats }




