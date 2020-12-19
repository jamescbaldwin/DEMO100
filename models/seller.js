module.exports = function (sequelize, DataTypes) {
  const Sellers = sequelize.define('Sellers', {
    seller_name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: true
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    item_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sellers_bio:{
      type: DataTypes.STRING
    },
    sellers_email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
 });
    Sellers.associate = function (models) {
      Sellers.hasMany(models.Item, {
        onDelete: "cascade"
      });
    }
  return Sellers;
};