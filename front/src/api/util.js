import axios from "axios";

export const serviceMethod = (method, url, data = {}, callback) => {
  console.log("DATA", data);
  axios({ method, url, data, config: { "Content-type": "application/json" } })
    .then((response) => {
      callback.onSuccess(response);
    })
    .catch((error) => {
      callback.onFailed(error);
    });
};
