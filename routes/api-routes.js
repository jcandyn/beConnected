// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/contacts", function(req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Contacts.findAll({}).then(function(result) {
      res.json(result)
    })
   
  });

  // // Get route for returning posts of a specific category
  // app.get("/api/posts/category/:category", function(req, res) {
  //   db.Post.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   }).then(function(result) {
  //     res.json(result)
  //   })
  //   // Add sequelize code to find all posts where the category is equal to req.params.category,
  //   // return the result to the user with res.json
  // });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findAll({
      // where: {
      //   id: req.params.id
      // }
    }).then(function(result) {
      res.json(result)
    })
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
  });

  // POST route for saving a new post
  app.post("/api/contacts", function(req, res) {
    db.Contacts.create({
        name: req.body.name,
        contacted: req.body.contacted
    }).then(function(result) {
      res.json(result)
    })
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result)
    })
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update({
    body: req.body.body
    },
    {
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result)
    });
  })
};

