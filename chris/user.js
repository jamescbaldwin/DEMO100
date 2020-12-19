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
    
    // sellers_address:{
    // type:DataTypes.STRING,
    // required:TRUE,
    // allowNull:FALSE,
    // },
    
    // sellers_email: {
    // type: DataTypes.STRING,
    // allowNull: false,
    // unique: true,
    // validate: {
    // isEmail: true
    // }
    // },
    
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
    },
    
    // item_bought:{
    // type:DataType.BOOLEAN,
    // defaultValue: false,
    // allowNull:FALSE,
    // }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  // sellers.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  // sellers.addHook("beforeCreate", user => {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });
  return sellers;

};




