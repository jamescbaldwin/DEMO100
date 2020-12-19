// Requiring our models and passport as we've configured it
const db = require('../models')
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
 app.get('/api/newseller', async (req, res) => {
    const allSellers = await db.Sellers.findAll({})

    res.json(allSellers)
  }) 

  app.get('/api/item', async (req, res) => {
    const item = await db.Item.findAll({})

    res.json(item)
  }) 

 
  app.post("/newseller", (req, res) => {
    console.log(req.body)
    db.Sellers.create({
      seller_name: req.body.seller_name,
      // sellers_address: req.body.sellers_address,
      sellers_email: req.body.sellers_email,
      // SellerId: req.body.SellerId,
    })
   db.Item.create({
     
      item_name: req.body.item_name,
      item_price: req.body.item_price,
      seller_contact:req.body.sellers_email,
    })
    
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

// work on that with tutor
// figure out how to make it work in this file
//const Item = require("../models/model");
// module.exports = function(app) {
//     app.get("/api/all", (req, res) => {
//         Item.findAll({}).then(function(results) {
//             res.json(results);
//         });
//     });
// };