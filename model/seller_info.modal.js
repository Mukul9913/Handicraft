import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";


const SellerInfo = sequelize.define("seller_info",{
    sellerName:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isNumeric:false
        }
    },
    sellerEmail:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    sellerPassword:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sellerContact:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isNumeric: true
        }
    }
});

sequelize.sync()
.then(result=>{
    console.log("SellerInfo tables Created....");
})
.catch(err=>{
    console.log(err);
});

export default SellerInfo;