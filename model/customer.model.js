import sequelize from "./dbconfig.js";
import { DataTypes } from "sequelize";

const Customer = sequelize.define("customer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true
        }
    }
});
sequelize.sync()
    .then(result => {
        console.log("Customers table created.....");
    }).catch(err => {
        console.log(err);
    })

export default Customer;