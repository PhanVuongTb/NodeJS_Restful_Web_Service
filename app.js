// Bước 1: Include thư viện http
// const http = require('http');
// const express = require('express');
import express from 'express';
import { checkAuth } from './middlewares/checkAuth';
const app = express();
// const server = http.createServer(app);

// const homeRoute = require('./routes/home');
import homeRoute from './routes/home';
import productRoute from './routes/product';


app.use(express.json());
app.use(homeRoute);
app.use("/api", checkAuth, productRoute);


//Bước 3: lắng nghe cổng thực thi
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});