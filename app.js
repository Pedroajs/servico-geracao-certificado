const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();

router.get('/', (require, response)=>{
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('servidor rodando')