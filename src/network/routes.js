const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.send('hello World from get');
});

module.exports = router;