const db = require('../models')
const passport = require("../config/passport");

module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), (req, res) => {

    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.get('/api/newseller', async (req, res) => {
    const allSellers = await db.Sellers.findAll({})

    res.json(allSellers)
  });

  app.get('/api/item', async (req, res) => {
    const item = await db.Item.findAll({})

    res.json(item)
  }); 

 
  app.post("/newseller", (req, res) => {
    console.log(req.body)
    db.Sellers.create({
      seller_name: req.body.seller_name,
      item_name: req.body.item_name,
      item_price: req.body.item_price,
      sellers_email: req.body.sellers_email,
      sellers_bio: req.body.sellers_bio
    }).then(function (response) { 
      db.Item.create({
      seller_contact:req.body.sellers_email,
    }).then(function(data) {
      res.json(data);
    });
   });
  });

  app.delete("/api/newseller/:id", (req, res) => {
    db.Sellers.destroy({
      where : {
        id: req.params.id
      }
    }).then(function(result){
      res.json(result)
    });
    }); 

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};