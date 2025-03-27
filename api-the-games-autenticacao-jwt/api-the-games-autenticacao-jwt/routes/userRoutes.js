import express from "express"
import userController from "../controllers/userController.js"
import Auth from "../middleware/Auth.js";
const userRoutes = express.Router()

userRoutes.post("/user",userController.createUser);
userRoutes.post("/auth",userController.loginUser)

export default userRoutes