module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Products.associate = (models) => {
      Products.belongsTo(models.Sellars, {
        foreignKey: {
            allowNull:false
        },
      });
    };
  
  // Products.associate = (models) => {
  //     Products.belongsToMany(models.Categories, {
  //       through: "category_product",
  //       as:"products",
  //       foreignKey: "product_id"
  //     });
  //   };

  return Products;
};