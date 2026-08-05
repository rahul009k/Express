const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

function isUserUrl(url) {
  return url === "users";
}
function isGetMethod(method) {
  return method === HttpMethod.GET;
}
function isPostMethod(method) {
  return method === HttpMethod.POST;
}
function isPutMethod(method) {
  return method === HttpMethod.PUT;
}
function isDeleteMethod(method){
  return method ===HttpMethod.DELETE;
}

const routeHelper = {
  isGetMethod,
  isPostMethod,
  isPutMethod,
  isUserUrl,
  isDeleteMethod
};
export default routeHelper;
