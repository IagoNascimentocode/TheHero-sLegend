import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const updateUserController = new UpdateUserController();

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/list', listAllUsersController.handle)
usersRoutes.patch('/updateUser/:id', updateUserController.handle)

export { usersRoutes }