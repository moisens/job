const errorHandlerMidleware = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ msg: `There was an error!` });
};

export default errorHandlerMidleware;
