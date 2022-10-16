const connection = require('../config/connection');
const { User, Application } = require('../models');
const { getRandomUserName, getRandomApplications } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Application.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const applications = getRandomApplications(10);

  for (let i = 0; i < 20; i++) {
    const userName = getRandomUserName().toLowerCase();
    const email = `${userName}@email@com`;

    users.push({
      userName,
      email,
    });
  }

  await User.collection.insertMany(users);
  // await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  // console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
