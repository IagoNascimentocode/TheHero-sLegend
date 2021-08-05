import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListAllUsersController } from "../modules/accounts/useCases/listAllUsers/ListAllUsersController";
import { FindByIdUserController } from "../modules/accounts/useCases/findByIDUser/FindByIDUserController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";
import { SelectHeroController } from "../modules/accounts/useCases/selectHero/SelectHeroController";
import { ListUserChestController } from "../modules/accounts/useCases/listUserChest/ListUserChestController";
import { ReportController } from "../modules/accounts/useCases/report_pdf/ReportController";
import { ensureAuthenticated } from "../middlewares/authenticated/EnsureAuthenticated";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const findByIDUserController = new FindByIdUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const selectHeroController = new SelectHeroController();
const listUserChestController = new ListUserChestController();
const reportController = new ReportController();
const authenticateUserController = new AuthenticateUserController()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/list', ensureAuthenticated ,listAllUsersController.handle)
usersRoutes.get('/report', reportController.handle)
usersRoutes.get('/listChest/:id', listUserChestController.handle)
usersRoutes.get('/find/:id', findByIDUserController.handle)
usersRoutes.patch('/updateUser/:id', updateUserController.handle)
usersRoutes.delete('/deleteUser/:id', deleteUserController.handle)
usersRoutes.post('/selectHero/:id', selectHeroController.handle)
usersRoutes.post('/authenticate', authenticateUserController.handle)
export { usersRoutes }