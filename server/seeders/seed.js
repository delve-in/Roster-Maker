const db = require('../config/connection');
const { User, Shift, Schedule } = require('../models');
const userSeeds = require('./userSeeds.json');
const shiftSeeds = require('./shiftSeeds.json');

const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    
    await cleanDB('User', 'users');
    
    await User.create(userSeeds);
    await Shift.create(shiftSeeds);
    await Schedule.create(shiftSeeds);
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
