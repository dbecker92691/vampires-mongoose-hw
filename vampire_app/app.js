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
//     gender: 'F',
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
Vampire.create(
    { name: 'Debbi',
    hair_color: 'Brown',
    eye_color: 'Green',
    dob: new Date(1973, 2, 13, 7, 47),
    loves: ['One Prozac a day', 'Springsteen', 'Madonna', 'U2', 'Blondie'],
    location: 'Philadelphia',
    gender: 'F',
    victims: 1985, 
}, (err, createdVampire) => {
    if(err){
        console.log(err)
    } else {
        console.log(createdVampire)
    }
}
);


// ### Add some new vampire data

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

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
