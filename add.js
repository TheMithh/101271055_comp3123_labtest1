const fs = require('fs');
const path = require('path');

// Create Logs directory if it doesn't exist
const logsDir = path.join(__dirname, 'Logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change the current working directory to the Logs directory
process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(fileName);  
