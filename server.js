const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const categoryRoutes = require('./routes/categories');
const brandRoutes = require('./routes/brands');
const productRoutes = require('./routes/products');
const roleRoutes = require('./routes/roles');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

const PORT = process.env.PORT || 3000;
const DB_CONN_STR = process.env.DATABASE_URL;

const app = express();
mongoose.connect(DB_CONN_STR);
const database = mongoose.connection;
database.on('error',(error)=>{
    console.log("DB Error",error);
});
database.once('connected',()=>{
    console.log('db connected successfully');
});
const errorHandler = require('./middlewares/errorHandler');


app.use(express.json());
app.use('/api/categories',categoryRoutes);
app.use('/api/brands',brandRoutes);
app.use('/api/products',productRoutes);
app.use('/api/roles',roleRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(PORT,"Server is waiting for request");
})