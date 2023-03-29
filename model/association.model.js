import Category from "./category.model.js";
import Product from "./product.model.js";

Category.hasMany(Product, {
    foreignKey: "categoryName"
})
Product.belongsTo(Category, {
    foreignKey: "categoryName", targetKey: "categoryName"
})

export { Product, Category }