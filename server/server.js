const express = require('express');
const db = require('./models');
const sellarRouter = require('./routes/sellarRoute');
const productRouter = require('./routes/productRoute');
const categoryRouter = require('./routes/categoryRoute');

const app = express();
app.use(express.json());


const PORT = 5000;

app.use('/sellar', sellarRouter);
app.use('/product', productRouter);
app.use('/category', categoryRouter);


db.sequelize.sync().then(()=>{
    app.listen(PORT, (err) => {
        if(!err) console.log(`started server on port ${PORT}`);
    })
}).catch(err=>console.log(err))
