const connection = require('../config/connection');
const { User, Thought, Application } = require('../models');
const { getRandomUserName, getRandomThought, getRandomApplications } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Application.deleteMany({});
  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  const thoughts = [];
  const applications = getRandomApplications(10);

  for (let i = 0; i < 5; i++) {
    const userName = getRandomUserName().toLowerCase();
    const email = `${userName}@email@com`;
    const thoughtsText = getRandomThought();

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
  await Thought.collection.insertMany(thoughts);
  // await Application.collection.insertMany(applications);

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.table(thoughts);
  // console.table(applications);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
