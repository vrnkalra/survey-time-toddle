require('dotenv').config();

const server = require('./server');
const db = require('./server/database/models');

const portNo = 3300;

const PORT = process.env.PORT || portNo;

db.sequelize.sync().then(() => {
  server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
});
