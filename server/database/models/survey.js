module.exports = (Sequelize, DataTypes) => {
  const Survey = Sequelize.define('Survey', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      // references: {
      //   model: 'users',
      //   key: 'id',
      // },
    },
  });

  // Survey.associate = (models) => {
  //   Survey.hasMany(models.Question, {
  //     as: 'questions',
  //   });
  //   // Survey.belongsTo(models.User, {
  //   //   foreignKey: {
  //   //     foreignKey: 'user_id',
  //   //     allowNull: false,
  //   //   },
  //   //   onDelete: 'CASCADE',
  //   // });
  //   Survey.hasMany(models.Result, {
  //     as: 'results',
  //   });
  // };

  return Survey;
};
