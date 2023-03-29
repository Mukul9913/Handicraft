import { Product } from "../model/association.model.js"
export const saveProduct = async (request, response, next) => {
    try {
        let ProductList = request.body.products;
        console.log(ProductList);
        for (let product of ProductList) {
            let { title, description, price, discountPercentage, rating, stock, categoryName, thumbnail, sellerId, keyword } = product

            let imageArray = "";
            for (let image of product.images) {
                imageArray = imageArray + image + " ";
            }
            await Product.create({
                title: title, description: description, price: price, discountPercentage: discountPercentage, rating: rating, stock: stock, categoryName: categoryName, thumbnail: thumbnail, sellerId: sellerId, images: imageArray, keyword: keyword

            })
        }
        return response.status(200).json({ message: "PRODUCT IS INSERTED", status: true })
    }
    catch (err) {
        console.log(err)
        return response.status(500).json({ error: "error", status: false })
    }
}
export const deleteProduct = (request, response, next) => {

}

export const updateProduct = (request, response, next) => {

}

export const viewAllProduct = (request, response, next) => {
    Product.findAll({
        where: {
            sellerId: request.params.sellerId
        }
    }).then(result => {
        return response.status(200).json({ productsList: result, status: true })
    }).catch(err => {
        return response.status(500).json({ error: "INTERNAL SERVER ERROR", status: false })
    })

}

export const viewOrder = (request, response, next) => {

}

export const viewReview = (request, response, next) => {

}