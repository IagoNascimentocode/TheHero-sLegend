import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
    sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

    const authHeader = request.headers.authorization;

    if (!authHeader){
        throw Error("Token is missing!");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "fca661f9598208d45de7781c9289da1b") as IPayload;

        request.user_id = user_id;

        next();
    } catch(err) {
        throw Error("Token is invalid");
    }
}