const cors = require('cors');
const express = require('express');
const path = require('path'); // Esto me permitira tener staticos
const app = express();

// ROUTES
// const routesFile = require('./network/routes');
const tasksFile = require('./network/tasks');


//STATIC
 app.use(express.static(path.join(__dirname, 'client_dist'))) // Aca se pone la carpeta

 // Integro la carpeta views para que express las pueda renderizas
app.set('views', path.join(__dirname, 'views'));

app.set('port', process.env.PORT || 3000); // si hay un port definido x el user se usa
                                            // si no, se ocupa el 3000

app.engine('html', require('ejs').renderFile); // for render html from backend
app.set('view engine', 'ejs');  // the same 

//MIDLEWARES son funciones que se ejecutan antes de recibir la info del cliente

app.use(cors()); // permite la comunicacion entre servidores front-back
app.use(express.json()); // permite que express trabaje con el formato json es el body-parser
app.use(express.urlencoded({extended: false})); // recibir datos del url


//ROUTES
// app.use(routesFile);
app.use('/api',tasksFile); // cuando pido la ruta api del archivo task

app.listen(app.get('port'), () => { //callback for verify app.listen on
    console.log('SERVER ON PORT 3000', app.get('port')); // if you can see this msj, app listen work
}); 