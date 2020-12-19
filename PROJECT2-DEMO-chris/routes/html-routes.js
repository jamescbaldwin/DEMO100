// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
  
    
    // insert below file directory as well
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/seller", (req, res) => {
    // If the user already has an account send them to the members page
 
    res.sendFile(path.join(__dirname, "../public/sellers.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/buyers", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/buyers.html"));
  });
// go back to this when ready
  // app.get("/users", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../public/users.html"));
  // });
};