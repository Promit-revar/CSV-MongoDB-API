const express = require('express');
const router = express.Router();
const UploadController = require('../controllers/UploadController');
const errorController = require('../controllers/ErrorController');
router.get('/',UploadController.home);
router.post('/upload', UploadController.upload);
router.get('/error',errorController.FileTypeNotExcepted);

module.exports = router;