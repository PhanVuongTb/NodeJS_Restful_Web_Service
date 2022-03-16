// const express = require('express');
import express from "express";
const route = express.Router();

route.get('/',(request,response)=>{
    response.send(`
        <h1> Home Page <\h1>
        <p> Content text </p>
        <img src="https://www.apple.com/v/apple-events/shared/a/images/overview/iphone-13-pro/iphone13pro__em6q3cyq8ygm_large.jpg">
    `);
})

export default route;
// module.exports = route;