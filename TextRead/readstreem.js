const fs=require('fs');
const readstream=fs.createReadStream("data.txt");

readstream.pipe(process.stdout);
