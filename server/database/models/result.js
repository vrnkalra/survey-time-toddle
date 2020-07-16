module.exports = (Sequelize, DataTypes) => {
  const Result = Sequelize.define(
    'Result',
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      survey_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      questionId: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      answer: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );

  // Result.associate = (models) => {
  //   Result.belongsTo(models.User, {
  //     onDelete: 'CASCADE',
  //     foreignKey: {
  //       foreignKey: 'user_id',
  //       allowNull: false,
  //     },
  //   });
  //   Result.belongsTo(models.Survey, {
  //     onDelete: 'CASCADE',
  //     foreignKey: {
  //       foreignKey: 'survey_id',
  //       allowNull: false,
  //     },
  //   });
  //   Result.belongsTo(models.Survey, {
  //     onDelete: 'CASCADE',
  //     foreignKey: {
  //       foreignKey: 'questionId',
  //       allowNull: false,
  //     },
  //   });
  // };

  return Result;
};
