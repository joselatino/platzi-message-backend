import { DataTypes, Model, Sequelize } from 'sequelize';

const MESSAGE_TABLE = 'messages';

const MessageSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
};

class Message extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: MESSAGE_TABLE,
      modelName: 'Message',
      timestamps: false,
    };
  }
}

export { MESSAGE_TABLE, MessageSchema, Message };
