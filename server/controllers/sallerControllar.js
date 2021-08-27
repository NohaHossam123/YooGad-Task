const { Sellars } = require('../models');

const createSellar = (req,res)=>{
    const { name } = req.body;
    Sellars.create({ name })
    .then(newSaller=> res.json(newSaller))
    .catch(err=>res.status(400).send({ message:err.message }))
}

module.exports = {
    createSellar,
}