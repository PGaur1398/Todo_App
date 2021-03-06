const express = require('express');

const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.home);
router.get('/remove',homeController.remove);
router.post('/create', homeController.create);
router.post('/update', homeController.update);
router.post('/delete', homeController.delete);
router.get('/sortAsc',homeController.sortAsc);
router.get('/sortDesc',homeController.sortDesc);


module.exports = router;