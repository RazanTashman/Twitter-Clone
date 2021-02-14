var Router = require('express').Router();
var http = require('http');
var controller = require("./controller")

Router.get("/signup",controller.signup)
module.exports = Router