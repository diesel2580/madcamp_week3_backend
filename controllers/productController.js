const axios = require('axios');
const Product = require('../models/Product');

const CHATGPT_API_URL = 'https://api.openai.com/v1/completions';
const CHATGPT_API_KEY = 'YOUR_CHATGPT_API_KEY';

exports.scrapeProduct = async (req, res) => {
    const { externalUrl } = req.body;

    try {
        const response = await axios.post(
            CHATGPT_API_URL,
            {
                model: 'text-davinci-003',
                prompt: `Extract the product name, price, and image URL from the following page: ${externalUrl}`,
                max_tokens: 100,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHATGPT_API_KEY}`,
                },
            }
        );

        const { name, price, imageUrl } = JSON.parse(response.data.choices[0].text);

        res.status(200).json({ name, price, imageUrl });
    } catch (error) {
        res.status(500).json({ error: 'Failed to extract product information' });
    }
};

exports.addProduct = async (req, res) => {
    const { name, price, imageUrl, externalUrl } = req.body;

    try {
        const newProduct = new Product({ name, price, imageUrl, externalUrl });
        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
