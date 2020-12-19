  
// Sequelize (capital) references the standard library
// sequelize (lowercase) references our connection to the DB.
// var Sequelize = require("sequelize");
// var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define('Item', {
     item_name: {
         type: DataTypes.STRING,
         allowNull: true
     },
     item_price: {
         type: DataTypes.INTEGER,
         allowNull: true,
     },
     seller_contact: {
         type: DataTypes.STRING,
         
     },
     purchased: {
         type: DataTypes.BOOLEAN,
         allowNull: true,
         defaultValue: false
     },
  });
  Item.associate = function(models) {
    
      Item.belongsTo(models.Sellers, {
        foreignKey: 'SellerId',
        allowNull: false
        }
      );
    };

  return Item;
};
// Syncs model with DB
// Item.sync();

// // Makes the Item Model available for other files (will also create a table)
// module.exports = Item;