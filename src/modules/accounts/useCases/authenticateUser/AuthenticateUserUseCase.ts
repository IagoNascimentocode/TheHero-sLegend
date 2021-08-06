import { hash, compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";


interface IRequest {
    email: string;
    password: string
}

@injectable()
class AuthentiCateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({ email, password }: IRequest): Promise<string>{
        const user = await this.usersRepository.findByEmail(email);

        if (!user){
            throw Error("Email or password incorrect");
        }

        const encryptedPassword = await hash(password, 8)

        const passwordMath = await compare(password, encryptedPassword)

        if (!passwordMath){
            throw Error("Email or password incorrect");
        }

        const token = sign({ email: user.email }, "fca661f9598208d45de7781c9289da1b", {
            subject: user.id,
            expiresIn: "15d",
        });

        return token;
    }
}

export { AuthentiCateUserUseCase };
