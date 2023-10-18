import { getSession } from "next-auth/react";
import ErrorHandler from "../utils/errorHandler";

const isAuthenticatedUser = async (req, res, next) => {
  const session = await getSession({ req });
  console.log("Session yes", session)
  if (!session) {
    return next(new ErrorHandler("Login first to access this route", 401));
  }

  req.user = session.user;

  next();
};

export { isAuthenticatedUser };


// import { getSession } from "next-auth/react";
// import ErrorHandler from "../utils/errorHandler";

// const isAuthenticatedUser = async (req, res, next) => {
//   const session = await getSession({ req })
//   if (session) {
//     req.user = session.user;
//     console.log("User",user.id)
//   } else {
//     // Not Signed in
//     return next(new ErrorHandler("Login first to access this route", 401));
//     // res.status(401)
//   }
//   res.end()
// }
// export { isAuthenticatedUser };


// function isAuthorizedMiddleware (req, res, next) {  
//   if (!req.user) {
//     return res.status(401).send({ message: "Unauthorized" });
//   }
//   next();
// }

// export default isAuthorizedMiddleware