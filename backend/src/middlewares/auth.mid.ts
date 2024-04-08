import { verify, TokenExpiredError } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { HTTP_UNAUTHORIZED } from "../constants/http-status";

export default (req: any, res: Response, next: NextFunction) => {
    const token = req.headers.access_token as string;
    if (!token) return res.status(HTTP_UNAUTHORIZED).send({ message: "Access token is missing." });

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET!) as { [key: string]: any };
        req.user = decodedUser;
        next();
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(HTTP_UNAUTHORIZED).send({ message: "Access token has expired." });
        }
        return res.status(HTTP_UNAUTHORIZED).send({ message: "Invalid access token." });
    }
};
