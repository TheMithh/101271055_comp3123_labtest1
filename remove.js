const fs = require('fs');
const path = require('path');

// Define the path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {
  // Read all files in the Logs directory
  const files = fs.readdirSync(logsDir);
  
  // Delete each file and output its name
  files.forEach(file => {
    const filePath = path.join(logsDir, file);
    fs.unlinkSync(filePath);
    console.log(`delete files...${file}`);
  });

  // Remove the Logs directory
  fs.rmdirSync(logsDir);
} else {
  console.log('Logs directory does not exist.');
}
