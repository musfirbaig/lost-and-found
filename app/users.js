const table = {
    // User 1
    "user1": {
      "found_items": [
        {
          "title": "item name",
          "description": "item description",
          "location": "location value",
          "image": "public id of the cloudinary",
          "date": "2023-12-18" // ISO 8601 format
        },
         // other found items
      ],
      "lost_items": [] // can be an empty array initially
    },
    // User 2
    "user2": {
       // follow similar structure for other users
    }
  }
  


// {
//     "user_uuid": {
//         "reported_found_items": {
//             // item id  ( it will be auto incremented in the database, when added --reported)
//             "item_id_1": {
//                 "title" : "item name",
//                 "description" : "item description",
//                 "location": "location value",
//                 "image" : "public id of the cloudinary",
//                 "date" : "dd/mm/yyyy"
//             } 

//         },
//         "reported_lost_items": {

//         };
//     };

//     "another user_uuid": {
//         // .......
//     }
// }