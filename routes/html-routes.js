// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var express = require ("express")
var app = express()

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // app.get("/tables", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/tables.html"));
  // });

  // app.get("/reserve", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/reserve.html"));
  // });
  
  // If no matching route is found default to home
  app.get("/artist.html", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/artist.html"));
    console.log("tried to serve jquery")
    })
  app.get("/artist.js", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/assets/images/audienceBacker.mp4"));
    console.log("tried to serve jquery")
    })
  app.get("/jquery-3.3.1.min.js", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/assets/javascript/jquery-3.3.1.min.js"));
    console.log("tried to serve jquery")
    })
  app.get("/style.css", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/assets/css/style.css"));
    console.log("tried to serve css")
    })
    app.get("/typeahead.bundle.min.js", function(req, res) {
      res.sendFile(path.join(__dirname,  "../public/assets/javascript/typeahead.bundle.min.js"));
      console.log("tried to serve typeahead.js")
      })
      app.get("/handlebars-v4.0.11.js", function(req, res) {
        res.sendFile(path.join(__dirname,  "../public/assets/javascript/handlebars-v4.0.11.js"));
        console.log("tried to serve handlebars")
        })
        app.get("/main.js", function(req, res) {
          res.sendFile(path.join(__dirname,  "../public/assets/javascript/main.js"));
          console.log("tried to serve main.js")
          })
          
            app.get("/audienceBacker.mp4", function(req, res) {
              res.sendFile(path.join(__dirname,  "../public/assets/images/audienceBacker.mp4"));
              console.log("tried to serve jquery")
              })





  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,  "../public/index.html"));
    console.log("tried to serve html")
    })
  
  app.get("*", function(req, res) {
       res.sendFile(path.join(__dirname, "../public/index.html"));
      console.log("served html")
    
  });
    
};
