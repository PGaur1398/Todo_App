//Requring Database
const todo_tasks = require("../models/todo_tasks");

// controller to render home page
module.exports.home = function(req, res){

    todo_tasks.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching todos from db');
            return;
        }
        return res.render('home',{
         title: "Todo App",
         todo_lists: todos
        });
    });
}
// controller to create todo_task 
module.exports.create = function(req, res){
    todo_tasks.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date,
        checkbox: false,
      
    }, function(err, newTODO){
        if(err){
            console.log('Error in creating todo task !');
            return;
        }
        return res.redirect('back');
    });
}
module.exports.remove = function(req,res){
    let id = req.query.id;
    todo_tasks.findOneAndDelete(id,function(err){
  if(err)
     throw err;
     return res.redirect('back');
    });
}
// controller for updating checkbox
module.exports.update = function(req, res){
    todo_tasks.updateOne({_id:req.body.tasks[0]},{'$set':{checkbox:req.body.tasks[1]}},function(err, data){
        if (err){
           throw err;
        }
     return res.status(200).json(data);  
    });
    
}
// controller for deleting selected todos.
module.exports.delete = function(req,res){
    todo_tasks.deleteMany({checkbox : true},function(err,data){
    if(err){
        console.log('Error in creating todo!');
        return;
    }
    console.log(data);
    return res.status(200).json(data);  
   });
}