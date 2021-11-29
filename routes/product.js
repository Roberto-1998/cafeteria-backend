const { Router } = require('express');
const { check } = require('express-validator');
const { getProductos, crearProducto, actualizarProducto, borrarProductos, getProductoById } = require('../controllers/products');
const { existeProducto, checkTop3, existeProductoById } = require('../helpers/validar-db');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', getProductos);

router.get('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existeProductoById),
    validarCampos
], getProductoById);

router.post('/', [
    check('name', 'Name is required').notEmpty(),
    check('name').custom(existeProducto),
    check('price', 'Price is required').notEmpty(),
    check('category', 'You must assign a category').notEmpty(),
    check('top3').custom(checkTop3),
    validarCampos
], crearProducto);

router.put('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existeProductoById),
    validarCampos
], actualizarProducto);

router.delete('/:id', [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existeProductoById),
    validarCampos
], borrarProductos);




module.exports = router;