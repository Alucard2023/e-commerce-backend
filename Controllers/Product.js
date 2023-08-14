const Product = require("../Models/Product")



exports.addproduct = async(req,res)=> {

const { name,reference ,description, prix } = req.body

let imageURL=""

if(req.file){
    imageURL=req.file.filename
}

    try {
       
        const newProduct = new Product ({
            name,
            description,
            prix,
             reference,
            imageURL,
           
        })
        

        await newProduct.save()
        
        res.status(200).send({ success : [{msg : 'Porduit ajouté'}] , newProduct})
        
    } catch (error) {
        res.status(400).send({msg : 'Produit non ajouté', error})   
    }
}




exports.deleteproduct = async (req,res) => {
    try {
        const{_id}= req.params;
        await Product.findOneAndDelete({_id})
        res.status(200).send({msg : "Product deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete this Product", error})      
    }
}



exports.getproducts = async (req,res) => {
    try {
        const listProducts = await Product.find();
        res.status(200).send({msg : 'Products list',listProducts})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all Products', error})
    }
  }


  exports.getOneProduct = async (req,res) => {
    const{_id}= req.params;

   try{ 
    const productToGet = await Product.findOne(req.params);
    res.status(200).send({msg : 'get product ',productToGet})
    
} catch (error) {
    res.status(400).send({msg : 'fail to get product ', error})
} }

