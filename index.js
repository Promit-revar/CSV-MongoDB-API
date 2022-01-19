const express=require('express');
const fileUpload = require('express-fileupload');
const app=express();
const path=require('path');
const webRoutes = require('./routes/web');
const connection=require('./config/database');
connection.connect();

app.set('view engine', 'ejs');
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname,'temp'),
    createParentPath: true
}));
app.use(webRoutes);

app.listen(8000,e=>console.log("Server Running On port 8000..."));