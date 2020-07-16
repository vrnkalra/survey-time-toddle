module.exports = (Sequelize, DataTypes) => {
  const Question = Sequelize.define('Question', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    survey_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // Question.associate = (models) => {
  //   Question.belongsTo(models.Survey, {
  //     foreignKey: {
  //       foreignKey: 'survey_id',
  //       allowNull: false,
  //     },
  //     onDelete: 'CASCADE',
  //   });
  // };

  return Question;
};
