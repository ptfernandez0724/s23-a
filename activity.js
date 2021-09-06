// Create Hotel Database


// Solutions:

// To insert:

// db.rooms.insert(
// {
//     "name" : "single",
//     "accommodates" : "2",
//     "price" : 1000,
//     "description" : "A simple room with all the basic necessities",
//     "rooms_available" : "10"
// }
// );


// To update:

// db.rooms.update(
// {
//     "name" : "single"
// },
// {
//     $set : {
//         "isAvailable" : false
//     }
// }
// );

// To insert Many

// db.rooms.insertMany(
// [
//     {
//         "name": "double",
//         "accommodates" : "3",
//         "price" : 2000,
//         "description" : "A room fit for a small family going on a vacation",
//         "rooms_available" : "5",
//         "isAvailable" : false
//     },
//     {
//         "name": "queen",
//         "accommodates" : "4",
//         "price" : 4000,
//         "description" : "A room with a queen sized bed perfect for a simple getaway",
//         "rooms_available" : "15",
//         "isAvailable" : false
//     }
// ]
// );

// To find a room

// db.rooms.find(
// {
//     "name" : "double"
// }
// );

// To update a room

// db.rooms.updateOne(
// {
//     "name" : "queen"
// },
// {
//     $set: {
//         "rooms_available" : "0"
//     }
// }
// );

// To delete rooms

// db.rooms.deleteMany(
// {
//     "name" : "queen"
// }
// );