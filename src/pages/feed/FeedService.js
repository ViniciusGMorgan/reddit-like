import api from "../../services/api";

export function getLinks() {
  return new Promise((resolve, reject) => {
    api
      .get("5a6bc16631000078341b8b77")
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
