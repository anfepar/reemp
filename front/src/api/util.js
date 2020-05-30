import axios from "axios";

export const serviceMethod = (method, url, data = {}, callback) => {
  console.log(method, url, data, callback);
  axios({ method, url, data })
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};
