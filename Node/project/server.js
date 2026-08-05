import http from "http";
import users from "./services/userService.js";
import request from "./helpers/requestHelper.js";
import response from "./helpers/responseHelper.js";
import route from "./helpers/routeHelper.js";

const server = http.createServer(async (req, res) => {
    const url = req.url.split("/");
  if (route.isUserUrl(url[1])) {
    if (route.isGetMethod(req.method)) {
      if (url[2]) {
        const id = request.getUserId(req,res,url)
        const user = await users.getUserById(id);
        if (user === null) {
          return response.returnError(res, "User Not found", 404);
        }

        return response.returnJson(res, user);
      } else {
        const userslist = await users.getUsers();
        return response.returnJson(res, userslist);
      }
    }
    // Handle POST request for creating a new user
    else if (route.isPostMethod(req.method)) {
      try {
        const user = await request.getJsonBody(req);
        if (!user.name || !user.city) {
          return response.returnError(res, "Name and City are required", 400);
        }

        const newUser = await users.addUser(user.name, user.city);
        res.statusCode = 201;
        return response.returnJson(res, newUser);
      } catch (error) {
        console.error("Error creating user:", error);
        if (error instanceof SyntaxError) {
          return response.returnError(res, "Invalid JSON payload", 400);
        }
        return response.returnError(res, "Failed to create user", 500);
      }
    }
    // Handle PUT request for updating a user
    else if (route.isPutMethod(req.method)) {


      const id = request.getUserId(req,res,url)
      try {
        const userData = await request.getJsonBody(req);
        if (!userData.name && !userData.city) {
          return response.returnError(
            res,
            "At least one of Name or City is required",
            400,
          );
        }
        const updatedUser = await users.updateUser(
          id,
          userData.name,
          userData.city,
        );
        if (updatedUser === null) {
          return response.returnError(res, "User Not found", 404);
        }
        res.statusCode = 200;
        return response.returnJson(res, updatedUser);
      } catch (error) {
        if (error instanceof SyntaxError) {
          return response.returnError(res, "Invalid JSON payload", 400);
        }
        return response.returnError(res, "Failed to update user", 500);
      }
    }
    // Handle Delete request 
    else if(route.isDeleteMethod(req.method)){
        const id = request.getUserId(req,res,url);

    }
    return response.returnError(res, "Method Not Allowed", 405);
  }
  //not found
    return response.returnError(res, "Not Found", 404);
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
