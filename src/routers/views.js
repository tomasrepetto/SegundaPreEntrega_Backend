import { Router } from 'express';
import { getProductsService } from '../services/products.js';
import { getCartsByIdService } from '../services/carts.js';

const router = Router();

router.get('/', async (req,res) =>{
    const {payload} = await getProductsService({});
    return res.render('home', {productos: payload, styles: 'style.css', title:'Home'});
});

router.get('/realtimeproducts', (req,res) =>{
    return res.render('realTimeProducts', {styles: 'style.css', title:'Real Time'});
});

router.get('/chat', (req,res) =>{
    return res.render('chat', {styles: 'chat.css', title:'Chat'});
});

router.get('/products', async (req,res) =>{
    const result = await getProductsService({...req.query});
    return res.render('products',{title:'productos', result, styles: 'products.css'});
});

router.get('/cart/:cid', async(req, res)=>{
    const {cid} = req.params;
    const carrito = await getCartsByIdService(cid);
    return res.render('cart',{title:'carrtio', carrito, styles: 'cart.css'});
});

export default router;