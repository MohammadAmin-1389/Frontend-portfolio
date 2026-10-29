import jwt from "jsonwebtoken";
import config from "config";

// Protects a route: the request must carry "Authorization: Bearer <token>"
export function auth(req, res, next) {
  const header = req.header("Authorization") || "";
  const [type, token] = header.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ message: "Access denied. No token provided" });
  }

  try {
    req.user = jwt.verify(token, config.get("jwt.secret")); // { id, iat, exp }
    next();
  } catch {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}
