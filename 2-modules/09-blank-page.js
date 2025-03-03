// Blank Page 🗒️
// Codédex

const fs = require("fs");

const filePath = "seventh-grade.txt";

fs.unlink(filePath, (err) => {
  if (err) {
    console.error("Error deleting diary file:", err);
    return;
  }
  console.log("Diary entry deleted!!");
});

/* 
//Solution for Bonus Exercise
//You can apply this to the original file before deleting it

const fs = require("fs");
// Read the file
fs.readFile("seventh-grade.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Replace all Latin letters with rectangles
  const redactedText = data.replace(/[A-Za-z]/g, "█");
  // Write the modified content back to the file
  fs.writeFile("seventh-grade.txt", redactedText, (err) => {
    if (err) {
      console.error("Error redacting file:", err);
      return;
    }
    console.log("\nKEEP OUT!!!!!!\n", data);
  });
});

*/