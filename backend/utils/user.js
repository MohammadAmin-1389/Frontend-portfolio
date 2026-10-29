import jwt from "jsonwebtoken";
import config from "config";
import _ from "lodash";

// Only these fields are ever sent to the frontend (never the password hash)
export function publicUser(user) {
  return _.pick(user.toObject(), ["_id", "username", "email", "phone"]);
}

// Creates a signed token that contains the user id
export function createToken(user) {
  return jwt.sign({ id: user.id }, config.get("jwt.secret"), {
    expiresIn: config.get("jwt.expiresIn"),
  });
}
