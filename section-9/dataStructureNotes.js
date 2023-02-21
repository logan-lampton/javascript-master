// Sources of Data
// 1. From the program itself - data written directly into source code (EX: status messages)
// 2. From the UI - Data input from the user or data written in the DOM (EX: tasks in a todo app)
// 3. From external sources - Data fetched; for example from web APIs
// -------------------------------------------------------------------------------------------------------------------------

// Store collections of data in data structures

// Arrays or Sets
// Good for simple lists
// When you don't need key: value pairs

// Objects or Maps
// For more complex data structures
// Key: value pairs allow us to describe values

// API data is saved in an object that includes arrays
// -------------------------------------------------------------------------------------------------------------------------

// Arrays vs. Sets

// Arrays
// Use when you need an ordered list of values (might contain duplicates)
// Use when you need to manipulate data

// Sets
// Use when you need to work with unique values
// Use when high-performance is REALLY important
// Use to remove duplicates from arrays

// -------------------------------------------------------------------------------------------------------------------------
// Objects vs. Maps

// Objects
// More traditional key/value .store ("abused" objects)
// Easier to write and access values with . and []
// Use for storing functions

// Maps
// Better performance
// Keys can have ANY data type
// Easy to iterate
// Easy to compute size

// For key/value pairs, it can be argued that maps are better than objects
// Objects are very easy to write and most developers are very used to them