const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

const Actor = sequelize.define("Actor", {
    actor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    actorAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
});

// Actor.belongsToMany();

module.exports = Actor;