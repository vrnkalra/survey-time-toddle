module.exports = (Sequelize, DataTypes) => {
  const Result = Sequelize.define('Result', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    survey_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Result.associate = (models) => {
    Result.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: {
        foreignKey: 'id',
        allowNull: false,
      },
    });
    Result.belongsTo(models.Survey, {
      onDelete: 'CASCADE',
      foreignKey: {
        foreignKey: 'id',
        allowNull: false,
      },
    });
  };

  return Result;
};
