const Product = require('../models/productModel');

const create = async (data) => await Product.create(data);
const getAll = async () => await Product.find();
const getById = async (id) => await Product.findById(id);
const update = async (id, data) => await Product.findByIdAndUpdate(id, data, { new: true });
const remove = async (id) => await Product.findByIdAndDelete(id);

module.exports = { create, getAll, getById, update, remove };
