// setup_database.js
//
// Creates SQLite Database
// 
// Delete old database `rm collection.db` 
// Run `node setup_database.js` to create database
//
const sqlite3 = require("sqlite3").verbose();

//
// Connecting to or creating a new SQLite database file
//
const db = new sqlite3.Database(
  "./collection.db",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Connected to the SQlite database.");
  }
);

//
// Enable Foreign Keys in the Database configuration
//
const enableForeignKeys = `PRAGMA foreign_keys = ON;`

//
// Create table query
//
//users
const createUserTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    userid INTEGER PRIMARY KEY AUTOINCREMENT,
    is_consumer BOOLEAN NOT NULL,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    profilepicturepath VARCHAR(255),
    rating DECIMAL(3, 1) CHECK (rating >= 0.0 AND rating <= 5.0)
  );`;
//tasks
const createTasksTableQuery = `
  CREATE TABLE IF NOT EXISTS tasks (
    taskid INTEGER PRIMARY KEY AUTOINCREMENT,
    userid INTEGER,
    title TEXT NOT NULL,
    address TEXT NOT NULL,
    duration TEXT,
    location TEXT,
    description TEXT,
    available BOOLEAN,
    budget DECIMAL(10, 2),
    providerid INTEGER,
    FOREIGN KEY (userid) REFERENCES users(userid),
    FOREIGN KEY (providerid) REFERENCES users(userid)
  );
`;
//biddings
const createBiddingsTableQuery = `
  CREATE TABLE IF NOT EXISTS biddings (
    biddingid INTEGER PRIMARY KEY AUTOINCREMENT,
    taskid INTEGER,
    price DECIMAL(10, 2) NOT NULL,
    userid INTEGER,
    FOREIGN KEY (taskid) REFERENCES tasks(taskid),
    FOREIGN KEY (userid) REFERENCES users(userid)
);`;

//
// Populate tables
//
//users
const insertUserQuery = `
  INSERT INTO users (is_consumer, firstname, lastname, email, phone, profilepicturepath, rating) 
  VALUES 
    (1, 'John', 'Doe', 'john@example.com', '123-456-7890', '518bde6b90ef1eaf3eae45a066e2cc3d', 4.5),
    (0, 'Jane', 'Smith', 'jane@example.com', '987-654-3210', '9b31abe01e67a90f11fc365d311913c4', 3.8),
    (1, 'Alice', 'Johnson', 'alice@example.com', '111-222-3333', '39fca8c6f285399ce4eccfb99efceb9f', 5.0),
    (0, 'Bob', 'Brown', 'bob@example.com', '333-444-5555', 'f238e9a48e19d64a78e2035e8e57a52a', 4.2),
    (1, 'Eve', 'Williams', 'eve@example.com', '555-666-7777', '2c3fd42e894063151144d05b62aeb180', 4.7),
    (0, 'Michael', 'Johnson', 'michael@example.com', '777-888-9999', 'afeae595d3452864cef76cbed92d1e0f', 4.3);
`;
//tasks
const insertTaskQuery = `
  INSERT INTO tasks (userid, title, address, duration, location, description, available, budget, providerid) 
VALUES 
    (1, 'Pothole filling', '1001 Oak St', '2 hours', 'Chicago, IL', 'Volunteers needed to fill potholes on Oak St', 0, 50.00, 2),
    (1, 'Graffiti removal', '2002 Elm St', '3 hours', 'Chicago, IL', 'Community effort to clean graffiti off walls', 0, 80.00, 2),
    (1, 'Snow removal from sidewalks', '3003 Maple St', '4 hours', 'Chicago, IL', 'Help clear snow from sidewalks to keep the community safe', 0, 100.00, NULL),
    (1, 'Trash cleanup in the park', '4004 Pine St', '2 hours', 'Chicago, IL', 'Join us in cleaning up the local park to keep it beautiful', 0, 40.00, NULL),
    (1, 'Community garden maintenance', '5005 Cedar St', '3 hours', 'Chicago, IL', 'Assistance needed in maintaining the community garden', 0, 60.00, NULL),
    (1, 'Street sweeping', '6006 Walnut St', '2 hours', 'Chicago, IL', 'Help keep the streets clean by sweeping litter', 0, 30.00, NULL),
    (3, 'Public mural painting', '7007 Elmwood Ave', '5 hours', 'Chicago, IL', 'Join us in painting a community mural to beautify the neighborhood', 0, 150.00, NULL),
    (3, 'Community center renovation', '8008 Oakwood Dr', '6 hours', 'Chicago, IL', 'Assist in renovating the local community center for better facilities', 0, 200.00, NULL),
    (3, 'Tree planting', '9009 Maplewood Ln', '3 hours', 'Chicago, IL', 'Help plant trees in the neighborhood to improve air quality and aesthetics', 0, 50.00, NULL),
    (5, 'Neighborhood watch patrol', '1010 Cherry Ave', '4 hours', 'Chicago, IL', 'Join the neighborhood watch patrol to enhance safety and security', 0, 70.00, NULL),
    (5, 'Community kitchen volunteering', '1111 Pinehurst Blvd', '3 hours', 'Chicago, IL', 'Volunteer at the community kitchen to help prepare meals for those in need', 0, 50.00, NULL),
    (5, 'Community library book shelving', '1212 Birchwood Rd', '2 hours', 'Chicago, IL', 'Assist in organizing and shelving books at the community library', 0, 30.00, NULL);
`;

//biddings
const insertBiddingQuery = `
  INSERT INTO biddings (taskid, price, userid) 
  VALUES 
    (1, 45.00, 2),
    (2, 90.00, 2),
    (3, 180.00, 2),
    (3, 135.00, 4),
    (3, 135.00, 6),
    (4, 225.00, 4),
    (5, 90.00, 2),
    (6, 90.00, 2),
    (7, 90.00, 2);
`;

//
// Promise wrappers
//
// Helper Function to execute an SQL query with async/await
const runQuery = (db, query) => {
  return new Promise((resolve, reject) => {
    db.run(query, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
// Helper Function to execute an SQL select with async/await
const selectQuery = (db, query) => {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

//
// Connect to the database and execute queries
//
(async () => {
  try {
    //
    // Initial Configuration
    //
    // Enable foreign keys
    await runQuery(db, enableForeignKeys);
    console.log('Foreign keys enabled successfully');

    //
    // Creating tables
    //
    // Create the users table
    await runQuery(db, createUserTableQuery);
    console.log('Users table created successfully');

    // Create the tasks table
    await runQuery(db, createTasksTableQuery);
    console.log('Tasks table created successfully');

    // Create the biddings table
    await runQuery(db, createBiddingsTableQuery);
    console.log('Biddings table created successfully');

    //
    // Populate tables
    //
    // Insert data into the users table
    await runQuery(db, insertUserQuery);
    console.log('Users data inserted successfully');
    
    // Insert data into the tasks table
    await runQuery(db, insertTaskQuery);
    console.log('Tasks data inserted successfully');

    // Insert data into the biddings table
    await runQuery(db, insertBiddingQuery);
    console.log('Biddings data inserted successfully');

    // Retrieve and display the inserted data
    const usersData = await selectQuery(db, 'SELECT * FROM users');
    console.log('Users data:');
    console.log(usersData);

    const tasksData = await selectQuery(db, 'SELECT * FROM tasks');
    console.log('Tasks data:');
    console.log(tasksData);

    const biddingsData = await selectQuery(db, 'SELECT * FROM biddings');
    console.log('Biddings data:');
    console.log(biddingsData);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    db.close();
  }
})();
