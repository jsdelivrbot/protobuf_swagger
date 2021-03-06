const express = require('express')
const controller = require('../controller')

const api = express.Router()

api.get('/swagger.json', controller.swagger.doc)
api.get('/apidoc', controller.swagger.index)

api.get('/products', controller.product.index)
api.post('/products', controller.product.create)

module.exports = api
