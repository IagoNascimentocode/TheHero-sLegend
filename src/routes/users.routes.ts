import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { ListByIdUserController } from "../modules/accounts/useCases/listByIDUser/ListByIDUserController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";


const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const listByIDUserController = new ListByIdUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/list', listAllUsersController.handle)
usersRoutes.get('/list/:id', listByIDUserController.handle)
usersRoutes.patch('/updateUser/:id', updateUserController.handle)
usersRoutes.delete('/deleteUser/:id', deleteUserController.handle)

export { usersRoutes }