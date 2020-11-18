var path=require("path");
const { v4: uuidv4 } = require('uuid');

const notes = require("../db/db.json");

 module.exports=function(app){
     app.get("/api/notes",function(req,res){
         res.json(notes);
     });
     app.post("/api/notes",function(req,res){
         let newNote=req.body;
         newNote.id=uuidv4();
         console.log("new id " + newNote.id);
         notes.push(newNote);
         res.json(newNote);
     });
    app.delete("/api/notes/:id",function(req,res){
        let deleteNote=req.params.id;
        console.log("delete req " + req.params.id);
        for(var i=0;i<notes.length;i++){
            if(deleteNote==notes[i].id){
               notes.splice(i,1);
              }
            }
        return res.send();
    });
 }
