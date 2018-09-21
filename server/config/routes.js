var controller = require('../controllers/controller');

module.exports = function(app){
  app.get('/items/all', function(req, res) {
      console.log("IN ROUTES");
      controller.index(req,res);
  });

  app.post('/items/create', function(req,res){
      console.log("IN POST CREATE METHOD - ROUTE");

      controller.create(req,res);
  });

  app.get('/items/show/:id', function(req,res){
      controller.getOne(req,res);
  });

  app.put('/items/update/:id', function(req,res){
     console.log("IN ROUTES EDIT")
      controller.update(req,res);
  });

  app.delete('/items/delete/:id', function(req, res) {
    console.log("IN ROUTES DELETE")
      controller.deleteOne(req,res)
  });

}
