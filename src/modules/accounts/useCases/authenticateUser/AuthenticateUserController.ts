import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthentiCateUserUseCase } from "./AuthenticateUserUseCase";


class AuthenticateUserController {
    async handle(request: Request, response: Response){
        const { email, password } = request.body;
        const authenticateUserUseCase = container.resolve(AuthentiCateUserUseCase);

        const token = await authenticateUserUseCase.execute({ email, password });

        return response.status(200).json(token);
    }
}

export {AuthenticateUserController};