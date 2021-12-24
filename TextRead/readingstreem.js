const fs=require('fs');

function readingstreemfromModule()
{
    const readingStreem=fs.createReadStream("data.txt");
    readingStreem.pipe(process.stdout)
}

module.exports={readingstreemfromModule}