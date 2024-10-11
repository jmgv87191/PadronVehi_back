import { DataTypes } from "sequelize";
import sequelize from "../db/conn";


const padron = sequelize.define('productos',{


    no_inventario: {
        type: DataTypes.STRING
    },

    nombre_resguardante: {
        type: DataTypes.STRING
    },

    fecha: {
        type: DataTypes.DATE
    },

    id_vidrios: {
        type: DataTypes.NUMBER
    },


},{
    updatedAt: false,
    createdAt:false
})

export default padron



