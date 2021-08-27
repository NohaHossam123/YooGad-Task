const { Categories } = require('../models');

const createCategory = async(req,res)=>{
    const { name , parentId } = req.body;
    if(name === '') return res.status(400).json({message:"category name can't be empty.."});
    Categories.create({
        name,
        parentId
    }).then(newCategory=>res.status(200).json(newCategory))
    .catch(err=>res.status(400).send({ message:err.message }))
}


module.exports = {
    createCategory
}