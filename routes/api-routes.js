// Requiring our models and passport as we've configured it
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
  }) 

  app.get('/api/item', async (req, res) => {
    const item = await db.Item.findAll({})

    res.json(item)
  }) 

 
  app.post("/newseller", (req, res) => {
  //   console.log(req.body)
  //   db.Sellers.create({
  //     seller_name: req.body.seller_name,
  //     item_name: req.body.item_name,
  //     item_price: req.body.item_price,
  //     sellers_email: req.body.sellers_email,
  //     sellers_bio: req.body.sellers_bio
  //   })

  //  db.Item.create({
  //     seller_contact:req.body.sellers_email,
  //   })
    
  // });

  // app.get("/logout", (req, res) => {
  //   req.logout();
  //   res.redirect("/");
  // });

  // app.get("/api/user_data", (req, res) => {
  //   if (!req.user) {
  //     res.json({});
  //   } else {
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });

  app.post("/newseller", (req, res) => {
    console.log(req.body)
    db.Sellers.create({
      seller_name: req.body.seller_name,
      item_name: req.body.item_name,
      item_price: req.body.item_price,
      sellers_email: req.body.sellers_email,
      sellers_bio: req.body.sellers_bio,
    }).then(function (response) {
      // we havent deleted just becuase our app is finally starting to work
      db.Item.create({
        seller_contact: req.body.sellers_email,
      }).then(function (data) {
        console.log("Create", response, data)
        res.json(data)
      })
    })
  });
  app.delete("/api/newseller/:id", (req, res) => {
    console.log("Delete Route",req.params.id)
    db.Sellers.destroy({
      where : {
        id: req.params.id
      }
    }).then(function(result){
      console.log("Delete",result)
      res.json(result)
    })
    }) 
};