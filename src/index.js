const express = require('express');
const morgan  = require('morgan');
const app = express();

app.set('port',process.env.PORT || 3000)

/* Middlewares */
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res) =>{
    res.send("hello")
});

app.listen(app.get('port'), () =>{
    console.log(app.get('AppName'))
    console.log(`Server on port ${app.get('port')}`);
});