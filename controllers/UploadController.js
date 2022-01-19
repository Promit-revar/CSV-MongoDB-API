const csv=require('csv-parser');
const fs = require('fs');
const User=require('../models/User');
const path = require('path');
exports.home=async (req,res,next)=>{
      res.render('form');
      };
exports.upload=async (req,res,next)=>{
      try {
      const file=req.files.sample_csv;
      console.log(file);
      const fileName = new Date().getTime().toString() + path.extname(file.name);
      const savePath = path.join('D:/Node_Projects/Task1/', 'public', 'uploads', fileName);
      if (file.mimetype !== 'application/vnd.ms-excel') {
            throw new Error('Only CSV files are supported');
          }
      await file.mv(savePath);
      
      fs.createReadStream(savePath)
      .pipe(csv({}))
      .on('data',async (data)=>{
            const obj=new User(data);
            const result=await obj.save();
            console.log(result);
            
      });
      
      
      
      res.redirect('/');
      }
      catch (error) {
            console.log(error);
            res.redirect('/error');
          }
      
};

