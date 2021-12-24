



const fs=require('fs');
const arrayLength= process.argv.length;
const fileName=process.argv[arrayLength-2];
const format=process.argv[arrayLength-1]

const filestream=fs.createWriteStream(`${fileName}`+"."+`${format}`)


for(i=0;i<process.argv.length;i++)
{  
    
    filestream.write(process.argv[i]);
    filestream.write("\n ")

}


filestream.end();