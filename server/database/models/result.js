// module.exports = (Sequelize, DataTypes) => {
//     const User = Sequelize.define('User', {
//       id: {
//         type: DataTypes.BIGINT,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: true,
//       },
//     });

//     // User.associate = (models) => {
//     //   models.User.hasMany(models.Task);
//     // };

//     return User;
//   };
