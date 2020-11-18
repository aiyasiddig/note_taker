var path=require("path");
const { v4: uuidv4 } = require('uuid');

const notes = require("../db/db.json");

 module.exports=function(app){
     //reading the data 
     app.get("/api/notes",function(req,res){
         res.json(notes);
     });
     //inserting new data which the user had wriiten
     app.post("/api/notes",function(req,res){
        // fetching the new data the user wrote
         let newNote=req.body;
         //create a unique id using npm uuid
         newNote.id=uuidv4();
         console.log("new id " + newNote.id);
         //pushing the new data to the array
         notes.push(newNote);
         res.json(newNote);
     });
     //delete request if the user wants to delete a note
    app.delete("/api/notes/:id",function(req,res){
        //getting the unique id the user wants to delete
        let deleteNote=req.params.id;
        console.log("delete req " + req.params.id);
        //search for the id the user wants to delete in the array
        for(var i=0;i<notes.length;i++){
            //when the od is found..
            if(deleteNote==notes[i].id){
                //deleting using the splice 1 indicates that it should delete that id
               notes.splice(i,1);
              }
            }
        return res.send();
    });
 }
