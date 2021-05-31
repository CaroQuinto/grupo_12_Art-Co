const express = require('express');

const path = require('path')

const app = express();

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/view/index.html'))
});
app.use(express.static(path.resolve(__dirname, './public')));


app.listen(3005,()=>console.log('Lo Lograste'));

