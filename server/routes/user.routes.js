import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const UserRouter = Router()

UserRouter.route("/")
    .get(UserController.getAllUsers)

UserRouter.route("/register")
    .post(UserController.register)

UserRouter.route("/logout")
    .post(UserController.logout)

UserRouter.route("/login")
    .post(UserController.login)

UserRouter.route("/user/:id/edit")
    .get(UserController.getOneUser)
    .patch(UserController.editUser)

UserRouter.route("/user/:id/details")
    .delete(UserController.deleteUserById)

export default UserRouter;