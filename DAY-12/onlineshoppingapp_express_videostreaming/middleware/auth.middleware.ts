import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const header = req.headers.authorization;
    const token = header?.split(" ")[1];

    if (token) {
      jwt.verify(token, process.env.SECRET_KEY || "", (err, decodedToken) => {
        if (err) {
          return res.status(500).json({ err: "Invalid Token" });
        } else {
          if (decodedToken) {
            next();
          }
        }
      });
    } else {
      return res.status(401).json({ err: "Token not found !" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: "Something went wrong !" });
  }
};
