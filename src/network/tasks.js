const router = require('express').Router();

//IMport de mongojs dependencia
const mongojs = require('mongojs');
//Se crea constante de mongojs, con nombre mean-db
// [taks] es el nombre de la coleccion donde se guardarán
const db = mongojs('mean-db', ['tasks']);



router.get('/tasks', (req, res, next) => { // la ruta /taks
    db.tasks.find((err, tasks) => {
        if(err) return next(err);
        res.json(tasks);
    })
});

router.get('/tasks/:id', (req, res, next) => { // la ruta /taks
    // { _id: mongojs.ObjectID(req.params.id)} es el metodo para que devuelva
    //el objeto json, ya que monojs solo admite esto
    db.tasks.findOne({ _id: mongojs.ObjectId(req.params.id)},(err, task) => {
        if(err) return next(err);
        res.json(task);
    })
});

router.post('/tasks', (req, res, next) => {
    const task = req.body;
    if(!task.title || task.isDone) {
        res.status(400).json({
            error: 'Error en tasks'
        });
    }else{
        db.task.save(task, (err, task) => {
            if(err) return next(err);
            res.json(task);
        })
    }
});

router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, 
    (err, result) => {
        if(err) return next(err);
            res.json(result);
    })
});

router.delete('/task/:id', (req, res, next) => {
    const datos = req.body;
    const updateTask = {};

        if(datos.isDone) {
            updateTask.isDone = task.isDone;
        }
        if(datos.title) {
            updateTask.title = task.title;
        }
        if(!updateTask) {
            res.status(400).json({
                error: 'Error en update'
            });
        }else {
            db.tasks.update({_id: mongojs.ObjectId(req.params.id)},
            (err, result) => {
                if(err) return next(err);
                res.json(result);
                }
            )}
});

module.exports = router;