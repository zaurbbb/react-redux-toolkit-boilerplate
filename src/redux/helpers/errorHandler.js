import { adminLogout } from "../store/auth/slice";

export const errorHandler = (error, callback, dispatch) => {
  const errorInfo = error.response.data;
  const {
    statusCode,
    message,
  } = errorInfo;

  if (statusCode === 401) {
    dispatch(adminLogout());
  }

  console.log(`%c ${statusCode}: ${message}`, "background-color: #f54251; color: white; padding-right: 8px");
  return callback(errorInfo.message);
};
