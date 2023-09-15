const express = require("express") ;
const router = express.Router();
const {  deleteproduct, getproducts, getOneProduct, addproduct,} = require("../Controllers/Product");
const upload = require("../Middleware/upload");

router.post('/addProduct',upload.single("imageURL"),addproduct);
console.log()



// update contact

router.delete('/:_id',  deleteproduct);

router.get ("/allproducts",   getproducts);

router.get('/:_id',  getOneProduct) ;






module.exports = router;