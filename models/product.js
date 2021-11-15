const { model, Schema } = require('mongoose');


const ProductSchema = Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    ingredients: {
        type: Array,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    top3: {
        type: Boolean,
        default: false
    }
})

ProductSchema.method('toJSON', function() {
    const { __v, _id, ...resto } = this.toObject();
    resto.id = _id;
    return resto;
})

module.exports = model('Product', ProductSchema);