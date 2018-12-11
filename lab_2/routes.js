const router = require('express').Router();
const homeController = require('./controllers/home');

router.get('/', homeController.homePage);
router.get('/text', homeController.textReport);
router.get('/binary', homeController.binaryReport);

router.post('/', homeController.addNewItem);

module.exports = router;