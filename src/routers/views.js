import { Router } from 'express';
import { getProductsService } from '../services/products.js';

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


export default router;