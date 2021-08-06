import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../modules/accounts/repositories/UsersRepository";



export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    const id = request.user_id;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByID(id);

    if (!user.admin){
        throw Error("This user is not a admin!");
    }

    next();
}