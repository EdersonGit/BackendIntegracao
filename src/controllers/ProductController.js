const Product = require('../models/Product');

const ProductController = {

  getProductList: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const { name, description, price, stock } = req.body;
      const newProduct = await Product.create({ name, description, price, stock });
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { name, description, price, stock } = req.body;
      const [updated] = await Product.update({ name, description, price, stock }, {
        where: { id: req.params.id }
      });

      if (updated) {
        const updatedProduct = await Product.findByPk(req.params.id);
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const deleted = await Product.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = ProductController;
