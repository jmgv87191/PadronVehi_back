"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('u380600865_productos', 'u380600865_jmgv8719', 'Jmsa424b', {
    host: '62.72.50.1',
    dialect: 'mysql'
});
exports.default = sequelize;
