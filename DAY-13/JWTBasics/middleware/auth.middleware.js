const SECRET_KEY = "MySecretKey";
import jwt from "jsonwebtoken";
export const isAuthenticated = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];

    console.log(token);
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ err: "Invalid Token" });
        } else {
          console.log(decodedToken);

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
  }
};
