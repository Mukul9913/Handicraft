import { Category } from "../model/association.model.js"


export const saveCategory = async (request, response, next) => {
    try {
        for (let category of request.body.categories) {
            await Category.create({ categoryName: category })
        }
        return response.status(200).json({ message: "Categories SAVED" });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "INTERNAL SEVER ERROR" })
    }
} 