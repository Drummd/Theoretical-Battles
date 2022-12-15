const db = require('../config/connection');
const { Fighter } = require('../models');
const fighterSeeds = require('./fighterSeeds.json');

//maybe a problem here -- it isnt pulling up any data when called 
db.once('open', async () => {
    const fighterData = await Fighter.insertMany(fighterSeeds)
    
    console.log('all done!');
    process.exit(0);
});
// db.once('open', async () => {
//     const universeData = await Universe.insertMany(universeSeeds)
//     console.log('all done!');
//     process.exit(0);
// });
//     await Universe.find({});
//     await Universe.find({ fighterSeeds });
