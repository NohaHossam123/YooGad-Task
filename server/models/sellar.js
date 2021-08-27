module.exports = (sequelize, DataTypes) => {
    const Sellars = sequelize.define("Sellars", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Sellars.associate = (models) => {
      Sellars.hasMany(models.Products, {
        onDelete: "cascade",
      });
    };
  
    return Sellars;
  };