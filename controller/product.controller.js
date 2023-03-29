
import { Result } from "express-validator";
import Product from "../model/product.model.js";
import { Op } from "sequelize";

export const list = async (request, response, next) => {
    try {
        const product = await Product.findAll()
        console.log(product);
        return response.status(200).json({ product: product, status: true });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    }
}

export const getProductByCategory = (request, response, next) => {
    Product.findAll({
        where: { categoryName: request.params.categoryName }
    }).then(result => {
        console.log(result);
        return response.status(200).json({ product: result, status: true });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    })
}

export const getProductByPk = (request, response, next) => {
    Product.findByPk(request.params.id, { raw: true })
        .then(result => {
            console.log(result);
            return response.status(200).json({ product: result, status: true });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal server error", status: false });
        });
}

export const search = (request, response, next) => {
    Product.findAll({
        where: {
            title: { [Op.like]: "%" + request.params.letter + "%" }
        }
    }).then(result => {
        console.log(result);
        return response.status(200).json({ product: result, status: true });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    })
}

export const searchByKeyword = (request, response, next) => {
    Product.findAll({
        where: {
            keyword: { [Op.like]: "%" + request.params.keyword + "%" }
        }
    }).then(result => {
        return response.status(200).json({ product: result, status: true });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal server error", status: false });
    })
}