const express=require('express');
const fileUpload = require('express-fileupload');
const app=express();
const path=require('path');
const webRoutes = require('./routes/web');
const connection=require('./config/database');
connection.connect();
const port=process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:path.join(__dirname,'temp'),
    createParentPath: true
}));
app.use(webRoutes);

app.listen(port,e=>console.log(`Server Running On port ${port}...`));
