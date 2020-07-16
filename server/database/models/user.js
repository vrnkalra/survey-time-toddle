module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // User.associate = (models) => {
  //   // User.hasMany(models.Survey, {
  //   //   foreignKey: 'user_id',
  //   //   as: 'surveys',
  //   // });
  //   // User.hasMany(models.Result, {
  //   //   foreignKey: 'id',
  //   //   as: 'results',
  //   // });
  // };

  return User;
};
