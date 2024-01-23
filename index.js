const express = require("express");
const app = express()
let port = 1000;
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`);
});
// app.set('view engine','./views');

app.set('views', './views');
app.set('view engine','ejs');


app.get('/home',(req,res)=>{
    res.render('home');
})