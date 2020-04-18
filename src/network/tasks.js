const router = require('express').Router();

router.get('/task', (req, res, next) => { // la ruta /taks
    res.send('API HERE');
})

module.exports = router;