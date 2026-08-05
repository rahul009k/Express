function returnJson(res, data) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data, null, 2));
}
function returnError(res, message, code) {
  res.statusCode = code;
  res.end(message);
}
const returnHelper = {
  returnJson,
  returnError,
};
export default returnHelper;