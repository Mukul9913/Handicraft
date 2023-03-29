import Customer from "../model/customer.model.js";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { response } from "express";

export const SignIn = async (request, response, next) => {
    try {
        let customer = await Customer.findOne({
            raw: true,
            where: {
                email: request.body.email
            }
        });
        if (customer) {
            let status = await bcrypt.compare(request.body.password, customer.password);
            if (status)
                return response.status(200).json({ message: "Sign in successful", status: true });
            return response.status(400).json({ message: "Bad request", status: false });
        }
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const SignUp = async (request, response, next) => {
    const errors = await validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ error: "Bad request", message: errors.array() });
    let saltkey = await bcrypt.genSalt(10);
    let encryptedPassword = await bcrypt.hash(request.body.password, saltkey);
    request.body.password = encryptedPassword;

    let customer = await Customer.create(request.body)
        .then(result => {
            return response.status(200).json({ customer: customer, status: true });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error", status: false })
        })

}