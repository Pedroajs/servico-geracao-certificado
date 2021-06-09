const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


app.engine('handlebars', handlebars({defaultLayout:'main'}));
app.set('view engine', 'handlebars')

app.get('/certificado', (require, response)=>{
    response.render('certificado');
})

 app.listen(3000);
console.log('servidor rodando')