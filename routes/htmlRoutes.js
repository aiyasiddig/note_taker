var path=require('path');

module.exports=function(app){
    app.get('/notes',function(req,res){
        //establishing a route for notes.html
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });

    app.get('*',function(req,res){
        //establishing a route for index.html
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });
};