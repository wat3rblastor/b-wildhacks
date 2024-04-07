// setup_database.js
//
// Creates SQLite Database
// 
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
    (1, 'John', 'Doe', 'john@example.com', '123-456-7890', 'path_to_image1.jpg', 4.5),
    (0, 'Jane', 'Smith', 'jane@example.com', '987-654-3210', 'path_to_image2.jpg', 3.8),
    (1, 'Alice', 'Johnson', 'alice@example.com', '111-222-3333', 'path_to_image3.jpg', 5.0),
    (0, 'Bob', 'Brown', 'bob@example.com', '333-444-5555', 'path_to_image4.jpg', 4.2),
    (1, 'Eve', 'Williams', 'eve@example.com', '555-666-7777', 'path_to_image5.jpg', 4.7)
`;
//tasks
const insertTaskQuery = `
  INSERT INTO tasks (userid, title, address, duration, location, description, available, budget, providerid) 
  VALUES 
    (1, 'Task 1', 'Address 1', '1 hour', 'Location 1', 'Description 1', 1, 50.00, 2),
    (2, 'Task 2', 'Address 2', '2 hours', 'Location 2', 'Description 2', 1, 100.00, 3),
    (3, 'Task 3', 'Address 3', '3 hours', 'Location 3', 'Description 3', 1, 150.00, 4),
    (4, 'Task 4', 'Address 4', '4 hours', 'Location 4', 'Description 4', 1, 200.00, 5),
    (5, 'Task 5', 'Address 5', '5 hours', 'Location 5', 'Description 5', 1, 250.00, 1)
`;
//biddings
const insertBiddingQuery = `
  INSERT INTO biddings (taskid, price, userid) 
  VALUES 
    (1, 45.00, 2),
    (2, 90.00, 3),
    (3, 135.00, 4),
    (4, 180.00, 5),
    (5, 225.00, 1)
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
    console.log('Data inserted into users table successfully');

    // Create the biddings table
    await runQuery(db, createBiddingsTableQuery);
    console.log('Data inserted into users table successfully');

    //
    // Populate tables
    //
    // Insert data into the users table
    await runQuery(db, insertUserQuery);
    console.log('Data inserted into users table successfully');
    
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
