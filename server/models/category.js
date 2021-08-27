module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define("Categories", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      parentId:{
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    Categories.associate = (models) => {
        Categories.belongsToMany(models.Products, {
          through: "category_product",
          as:"categories",
          foreignKey:"category_id"
        });
      };
  
    return Categories;
  };