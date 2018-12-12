const router = require('express').Router();
const homeController = require('./controllers/home');

router.get('/', homeController.homePage);
router.get('/text', homeController.textReport);
router.get('/binary', homeController.binaryReport);

router.post('/', homeController.addNewItem);
router.post('/text', homeController.uploadText);
router.post('/binary', homeController.uploadBinary);

module.exports = router;