const express = require("express") ;
const router = express.Router();
const {  deleteproduct, getproducts, getOneProduct, addproduct,} = require("../Controllers/Product");


router.post('/addProduct',addproduct);


// update contact

router.delete('/:_id',  deleteproduct);

router.get ("/allproducts",   getproducts);

router.get('/:_id',  getOneProduct) ;






module.exports = router;