"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conn_1 = __importDefault(require("../db/conn"));
const padron = conn_1.default.define('productos', {
    no_inventario: {
        type: sequelize_1.DataTypes.STRING
    },
    nombre_resguardante: {
        type: sequelize_1.DataTypes.STRING
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    id_vidrios: {
        type: sequelize_1.DataTypes.NUMBER
    },
}, {
    updatedAt: false,
    createdAt: false
});
exports.default = padron;
