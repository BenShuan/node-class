const fs = require('fs');

const filePathSync = 'exampleSync.txt'
const filePathASync = 'exampleASync.txt'

// --- Synchronous Operations ---

// Write file synchronously
fs.writeFileSync(filePathSync, "Hello, sync world!", "utf8");

// Append to file synchronously
fs.appendFileSync(filePathSync, "\nAppended sync line.", "utf8");

// Read file synchronously
const dataSync = fs.readFileSync(filePathSync, "utf8");
console.log('Sync read:', dataSync);


// --- Asynchronous Operations ---

// Write file asynchronously
fs.writeFile(filePathASync, "Hello, async world!", "utf8", (err) => {
  if (err) throw err;
  console.log("Async write complete.");

  // Read file asynchronously
  fs.readFile(filePathASync, "utf8", (err, dataAsync) => {
    if (err) throw err;
    console.log("Async read:", dataAsync);

    // Append to file asynchronously
    fs.appendFile(filePathASync, "\nAppended async line.", "utf8", (err) => {
      if (err) throw err;
      console.log("Async append complete.");
    });
  });
});