import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";



const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError('PLease provide all values!')
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs, totalJobs: jobs.length, numOfPages: 1 })
}

const deleteJob = async (req, res) => {
  res.send('Delete Job')
}

const updateJob = async (req, res) => {
  const {id: jobId} = req.params;
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequestError("Please provide all values!")
  }
  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`There is no job with id: ${jobId}`)
  }

  //check permissions

  const updateJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidators: true,
  })
  res.status(StatusCodes.OK).json({ updateJob });
}

const showStats = async (req, res) => {
  res.send('Show stats')
}


export { createJob, getAllJobs, deleteJob, updateJob, showStats }




