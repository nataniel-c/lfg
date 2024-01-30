const db = require('../config/connection');
const User = require('../models/User');
const cleanDB = require('./cleanDB');

const userData = require('./userData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(userData);

  console.log('Data seeded!');
  process.exit(0);
});
