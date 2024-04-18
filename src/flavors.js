const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Flavor = sequelize.define('Flavor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Flavor;
