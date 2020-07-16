module.exports = (Sequelize, DataTypes) => {
  const Survey = Sequelize.define('Survey', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Survey.associate = (models) => {
    Survey.hasMany(models.Question, {
      foreignKey: 'id',
      as: 'questions',
    });

    Survey.belongsTo(models.User, {
      foreignKey: {
        foreignKey: 'id',
        allowNull: false,
      },
      onDelete: 'CASCADE',
    });

    Survey.hasMany(models.Result, {
      foreignKey: 'id',
      as: 'results',
    });
  };

  return Survey;
};
