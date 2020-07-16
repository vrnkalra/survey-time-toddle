const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);

const db = {};

const sequelizeInstance = new Sequelize('sqlite::memory:');

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = sequelizeInstance.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

module.exports = db;
