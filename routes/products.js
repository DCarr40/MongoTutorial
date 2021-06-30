const Product = require ('../models/product');
const express = require('express');
const router = express.Router();

//All end points and routes handlers go here
router.post('/', async (req, res) => {
    try{
        const product = new Product({
            name: 'Stanley Classic Vacuum Bottle',
            description: 'Our Stanley Classic Vacuum Bottle is made with superior insulation that keeps liquids (soup, coffee, tea) hot or cold drinks for up to 24hrs.',
            category: 'Travel',
            price: 19.82,
        })
        await product.save()

        return res.send(product);

    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

