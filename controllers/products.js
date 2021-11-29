const { response } = require('express');
const Producto = require('../models/product');


const getProductos = async(req, res = response) => {

    try {

        const products = await Producto.find();
        res.json({
            ok: true,
            msg: 'GetProducts',
            products
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no validado por el backend'
        })
    }

}

const getProductoById = async(req, res = response) => {

    const { id } = req.params;

    try {
        const product = await Producto.findById(id);
        res.json({
            ok: true,
            msg: 'GetProductoById',
            product
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no validado por el backend'
        })
    }

}

const crearProducto = async(req, res = response) => {



    try {

        const product = new Producto(req.body);

        const productDB = await product.save();

        res.json({
            ok: true,
            msg: 'Producto Creado',
            product: productDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no manejado por el backend'
        })

    }



}

const actualizarProducto = async(req, res = response) => {

    const { id } = req.params;

    try {

        const product = await Producto.findByIdAndUpdate(id, req.body, { new: true });

        res.json({
            ok: true,
            msg: 'Producto Actualizado',
            product
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no manejado por el backend'
        })
    }
}

const borrarProductos = async(req, res = response) => {

    const { id } = req.params;

    try {
        const product = await Producto.findByIdAndDelete(id, { new: true });
        res.json({
            ok: true,
            msg: 'Producto Eliminado',
            product

        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error no manejado por el backend'
        })
    }



}

module.exports = {
    getProductos,
    actualizarProducto,
    crearProducto,
    borrarProductos,
    getProductoById
}