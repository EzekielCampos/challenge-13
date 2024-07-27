const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// The Product Tag model will holds the reference to the Product and Tag model
ProductTag.init(
  {
   

    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true
    },
    // References the Product Model
    product_id:{
      type:DataTypes.INTEGER,
      references:{

        model:'product',
        key:'id'
      }
    },
    // References the Tag model
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'tag',
        key:'id'
      }
    }


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
