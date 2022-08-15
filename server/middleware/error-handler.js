import { StatusCodes }from "http-status-codes"


const errorHandlerMiddleware = (error, req, res, next) => {
  console.log(error);
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    msg: 'Something went wrong, try again later'
  }
  res.status(defaultError.StatusCode).json({ msg: error });
};

export default errorHandlerMiddleware;
