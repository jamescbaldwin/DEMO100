// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const sellers = sequelize.define ('sellers',{
    seller_name:{
      type:DataTypes.STRING,
      required:TRUE,
      allowNull:FALSE,
      validate:{
      is: ["^[a-z]+$",'i'],
          }
    }, 
    seller_item:{},
    seller_description:{
      type:DataTypes.STRING,
      required:TRUE,
      allowNull:FALSE,
      validate:{
      is: ["^[a-z]+$",'i'],
      }
    },
    item_price:{
      type:DataType.INTEGER,
      required:TRUE,
      allowNull:FALSE,
    }
  });
  return sellers;
};




