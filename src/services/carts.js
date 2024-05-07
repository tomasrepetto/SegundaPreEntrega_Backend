import { cartModel } from "../dao/models/carts.js";

export const getCartsByIdService = async (cid) => {
    try{
        return await cartModel.findById(cid);
    } catch (error) {
        console.log('getCartsByIdService -> ', error);
        throw error;
    }
}

export const createCartService = async () => {
    try{
        return await cartModel.create({});
    } catch (error) {
        console.log('createCartService -> ', error);
        throw error;
    }
}

export const addProductInCartService = async (cid, pid)=> {
    try{
        const carrito = await cartModel.findById(cid);
        if(!carrito)
            return null;
        const productoInCart = carrito.products.find(p=>p.id.toString() === pid);
        if(productoInCart)
            productoInCart.quantity++;
        else
            carrito.products.push({id:pid, quantity: 1})

            carrito.save();
            return carrito;
    } catch (error) {
        console.log('addProductInCartService -> ', error);
        throw error;
    }
}