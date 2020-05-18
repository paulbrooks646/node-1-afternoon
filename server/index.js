const express = require('express')

const app = express()

const port = 4000

const getProducts = require('./getProducts')

const getProduct = require('./getProduct')
//app.listen(port, cb)
app.listen(port, () => {console.log(`Hello ${port}, I hope you have an awesome day!`)})

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)