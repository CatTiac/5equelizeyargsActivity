const { DataTypes } = require("sequelize");
const Actor = require("../actors/actorsTable");
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", {
    movie_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
});

Movie.hasMany(Actor, {foreignKey: 'actor', sourceKey: 'actor'});


module.exports = Movie;