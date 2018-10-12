// 1. Require your node modules
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/test'
mongoose.connect(connectionString);
const Vampire = require('../model/vampire')
// 2. Require your model (and possibly your extra data source);
const vampireData = require('./populateVampires')
// 3. Connect your database and collection name

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// Vampire.collection.insertMany(vampireData,() => {
//     console.log(vampireData)
//     mongoose.connection.close();
//   });

// Vampire.create(
//     { name: 'Steve',
//     hair_color: 'Blue',
//     eye_color: 'Green',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['Food', 'Blood', 'Long walks on the beach'],
//     location: 'Pensicola',
//     gender: 'He/Him/His',
//     victims: 4, 
// }, (err, createdVampire) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdVampire)
//     }
// }
// );

// Vampire.create(
//     { name: '',
//     hair_color: 'Blue',
//     eye_color: 'Green',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['Food', 'Blood', 'Long walks on the beach'],
//     location: 'Pensicola',
//     gender: 'He/Him/His',
//     victims: 4, 
// }, (err, createdVampire) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdVampire)
//     }
// }
// );
// Vampire.create(
//     { name: 'Lisa',
//     hair_color: 'Blond',
//     eye_color: 'Green',
//     dob: new Date(1993, 2, 13, 7, 47),
//     loves: ['Insta', 'PSLs', 'Ugg Boots', 'The blood of the innocent'],
//     location: 'Chi O till I die O!!',
//     gender: 'f',
//     victims: 13, 
// }, (err, createdVampire) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdVampire)
//     }
// }
// );
// Vampire.create(
//     { name: 'Frank',
//     hair_color: 'Balding',
//     eye_color: 'Brown',
//     dob: new Date(1958, 2, 13, 7, 47),
//     loves: ['Purell', 'Rum Ham'],
//     location: 'Philadelphia',
//     gender: 'M',
//     victims: 100, 
// }, (err, createdVampire) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdVampire)
//     }
// }
// );
// Vampire.create(
//     { name: 'Debbi',
//     hair_color: 'Brown',
//     eye_color: 'Green',
//     dob: new Date(1973, 2, 13, 7, 47),
//     loves: ['One Prozac a day', 'Springsteen', 'Madonna', 'U2', 'Blondie'],
//     location: 'Philadelphia',
//     gender: 'f',
//     victims: 1985, 
// }, (err, createdVampire) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(createdVampire)
//     }
// }
// );


// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING




/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({ gender: 'F' }, (err, vampireFind) => {
//     if (err) {
//         console.log(err)
//     }else {
//         console.log(vampireFind)

//     }
//   });

// Vampire.find({ victims: { $gt: 500}}, (err, victimFind) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(victimFind)
//     }

// });

// Vampire.find({victims: {$lte: 150}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({victims: {$ne: 210234}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({victims: {$gte: 150, $lte: 500}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist

// Vampire.find({ title: {$exists: true}}, (err, vampireExists) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireExists)
//     }
// });

// Vampire.find({ victims: {$exists: false}}, (err, vampireExists) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireExists)
//     }
// })

// Vampire.find({victims: {$exists: false}, title: {$exists: true}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({victims: {$gte: 1000}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

/////////////////////////////////////////////////
// ### Select with OR

// Vampire.find({ $or:[{location:'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' }] }, (err, vampireLocation) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(vampireLocation)
//     }
// });

// Vampire.find({$or: [{loves: 'brooding'}, {loves: 'being tragic'}]}, (err, vampireFinds) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFinds)
//     }
// });

// Vampire.find({$or: [{loves: 'marshmallows'},{victims: {$gte: 1000}}]}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({$or: [{hair_color: 'red'}, {eye_color: 'green'}]}, (err, vampFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampFind)
//     }
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find({$or: [{loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'}]}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({loves: 'brooding'}, (err,vampireFind) =>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({$or: [{loves: 'appearing innocent'}, {loves: 'trickery'}, {loves: 'lurking in rotting mansions'}, {loves: 'R&B music'}]}, (err, vampireFinds) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(vampireFinds)
//     }
// });

// Vampire.find({$and: [{loves: 'fancy cloaks'}, {loves: {$nin: ['top hats', 'virgin blood']}}]}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });
/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({$and: [{loves: 'ribbons'}, {eye_color: {$ne: ['green']}}]}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({location: {$ne: 'Rome, Italy'}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({love: {$ne: ['fancy cloaks', 'frilly shirsleeves', 'appearing innocent', 'being tragic', 'brooding']}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });

// Vampire.find({victims: {$lte: 200}}, (err, vampireFind) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(vampireFind)
//     }
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////



// listeners
mongoose.connection.on('connected', () => {
    console.log(`mongoose is connected to ${connectionString}`)
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose is disconnected')
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})
