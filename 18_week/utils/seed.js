const connection = require('../config/connection');
const { User, Thoughts, Application } = require('../models');
const { getRandomUserName, getRandomApplications } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Application.deleteMany({});
  await User.deleteMany({});
  await Thoughts.deleteMany({});

  const users = [];
  const thoughts = [5];
  const applications = getRandomApplications(10);

  for (let i = 0; i < 5; i++) {
    const userName = getRandomUserName().toLowerCase();
    const email = `${userName}@email@com`;
    const thoughtsText = getRandomThoughts();

    users.push({
      userName,
      email,
    });

    thoughts.push({
      thoughtsText,
      userName,
    })
  }

  await User.collection.insertMany(users);
  await Thoughts.collection.insertMany(thoughts);
  // await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  // console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
