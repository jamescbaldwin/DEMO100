  
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines

// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const Sellers = sequelize.define('Sellers', {

    seller_name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: true,
  
    },

    // sellers_address: {
    //   type: DataTypes.STRING,
    //   required: true,
    //   allowNull: true,
    // },

    sellers_email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      // validate: {
      //   isEmail: true
      // }
    },

 
 });
    Sellers.associate = function (models) {
    
      Sellers.hasMany(models.Item, {
        onDelete: "cascade"
      });
    }

  return Sellers;

};