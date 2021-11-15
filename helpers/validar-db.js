const { response } = require('express');
const product = require('../models/product');
const Producto = require('../models/product');

const existeProducto = async(name = '') => {

    const existeProducto = await Producto.findOne({ name });
    if (existeProducto) {
        throw new Error(`Product ${name} is already registered`);
    }
}

const checkTop3 = async(top3) => {
    if (top3) {
        const cantProductosTop3 = await Producto.countDocuments({ top3: true });
        if (cantProductosTop3 > 2) {
            throw new Error('Top products can not be more than 3');
        }
    }
}

module.exports = {
    existeProducto,
    checkTop3
}