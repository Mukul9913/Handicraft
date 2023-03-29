import { DataTypes } from "sequelize";
import sequelize from "./dbconfig.js";

const Category = sequelize.define("category", {
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
}, {
    timestamps: false
})
sequelize.sync().then((() => {
    console.log("CATEGORY TABLE CREATED")
})).catch(err => {
    console.log(err)
})
export default Category;