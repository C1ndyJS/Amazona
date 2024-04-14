const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://u41e0haegfc0fixl:HeLOR5M1R4Qyz9A6wCB@bofw568bn7fz0r9222jf-mysql.services.clever-cloud.com:21296/bofw568bn7fz0r9222jf')

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectToDatabase();
module.exports = sequelize;
