const express = require('express');
const { scrapeProduct, addProduct, getProducts } = require('../controllers/productController');

const router = express.Router();

router.post('/scrape', scrapeProduct);//상품 정보 스크래핑
router.post('/', addProduct);//상품 등록하기
router.get('/', getProducts);//상품 조회하기


module.exports = router;
