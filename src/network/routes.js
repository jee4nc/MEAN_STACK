const router = require('express').Router();

router.get('/', (req, res, next) =>{
    // En ves de ocupar res.send, se ocupa render y doy el fileName
    res.render('index.html');
});

module.exports = router;