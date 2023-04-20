const express = require('express')

const app  = express();

const ts = (req,res)=>{
    res.send("<li>Mahmoud</li> <li>Sabry</li> <li>Fetouh</li><li>Ghanem</li>")
}
 
app.get('/students',ts)

app.listen(5000)