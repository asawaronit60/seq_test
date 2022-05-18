const {DataTypes, sequelize } = require('../connection')

const User = sequelize.define('user',{
  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      isEmail:true
    }
  }
})

module.exports = User