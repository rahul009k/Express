 import response from "./helpers/responseHelper.js";

 function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      resolve(body);
    });
    req.on("error", (error) => {
      reject(error);
    });
  });
}
function getJsonBody(req){
    const body = await getRequestBody(req);
return JSON.parse(body);
}
function getUserId(req, res,url) {
    if (!url[2]) {
        return response.returnError(res, "UserId is required", 400);
    }
    const id = Number(url[2]);

    if (isNaN(id)) {
        return response.returnError(res, "Invalid UserId", 400);
    }
    return id;
}
const requestHelper = {
     getRequestBody,
  getJsonBody,
  getUserId
}
export default requestHelper;