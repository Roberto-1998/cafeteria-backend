const { Router } = require('express');
const { check } = require('express-validator');
const { getProductos, crearProducto, actualizarProducto, borrarProductos } = require('../controllers/products');
const { existeProducto, checkTop3 } = require('../helpers/validar-db');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getProductos);

router.post('/', [
    check('name', 'Name is required').notEmpty(),
    check('name').custom(existeProducto),
    check('price', 'Price is required').notEmpty(),
    check('category', 'You must assign a category').notEmpty(),
    check('top3').custom(checkTop3),
    validarCampos
], crearProducto);

router.put('/:id', actualizarProducto);

router.delete('/:id', borrarProductos);




module.exports = router;