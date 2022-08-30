import { UnauthenticatedError } from "../errors/index.js";



const checkPermissions = (requestUser, ressourceUserId) => {
  //if (requestUser.role === "admin") return;
  if (requestUser.userId === ressourceUserId.toString()) return;
  throw new UnauthenticatedError("Not authorized to access this route") 
}

export default checkPermissions;
