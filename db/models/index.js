import { User, UserSchema } from './user.model.js';
import {Message, MessageSchema} from "./message.js";

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Message.init(MessageSchema, Message.config(sequelize));
}

export default setupModels;
