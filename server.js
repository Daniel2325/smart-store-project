require('./models/db');
const express = require('express');
const path = require('path');
_handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');
const orderController = require('./controllers/orderController');

var app = express();
var port_number = process.env.PORT || 5000;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    handlebars: allowInsecurePrototypeAccess(_handlebars),
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname+'/views/'

}))
app.set('view engine', 'hbs');
app.listen(port_number,()=>{
    console.log('Escuchando el puerto 3000');
});
app.use('/',orderController);