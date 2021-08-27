const { Products } = require('../models');
const moment = require('moment');

const createProduct = (req,res)=>{

    const { name, price, SellarId } = req.body;
    if(name === '' || price === '') return res.status(400).json({message:"product name or product price can't be empty.."});
    if(name.length > 50) return res.status(400).json({message:"product name can't be more than 50 charts.."});
    if(price > 1000) return res.status(400).json({message:"product price can't be more than 1000.."});
    Products.create({
        name,
        price,
        SellarId
    }).then(newProduct=>res.json(newProduct))
    .catch(err=>res.status(400).send({ message:err.message }))
}

const getProductsSellar = (req,res)=>{
    Products.findAll({
        attributes: ['id', 'name', 'price', 'SellarId'],
        where:{SellarId: req.params.id}
    }).then(result=>res.json(result))
    .catch(err=>res.status(400).send({ message:err.message }));
    
}

const getAllProducts = (req, res)=>{
        Products.findAll({attributes: ['id', 'name', 'price', 'SellarId']})
        .then(products=>res.json(products))
        .catch(err=>res.status(400).send({ message:err.message }))
}

// const getProductByPrice = (req,res)=>{
//     // const {price1,price2} = req.query
//     // Products.findAll({
//     //     where:{
//     //         price:{
//     //             $between:[price1,price2]
//     //         }
//     //     }
//     // }).then(result=>console.log(result))
//     console.log(JSON.stringify(req.query))
// }


const deleteProduct = (req,res)=>{
    Products.destroy({
        where:{
            createdAt:{
                $gte: moment().subtract(1, 'MONTH').toDate()
            }
        }
    }).then(()=>res.send({ message:"product deleted successfully.." }))
    .catch(err=>res.status(400).send({ message:err.message }))
}

const updateProduct = (req,res)=>{
    const { id } = req.params;
    Products.update( req.body , {where:{ id}})
    .then(()=> res.send({message:"product updated successfully.."}))
    .catch(err=>res.status(400).send({ message:err.message }))
}

module.exports = {
    createProduct,
    getProductsSellar,
    deleteProduct,
    getAllProducts,
    updateProduct,
    // getProductByPrice
}