const mod = require('./module');
const os = require('os');
const fs = require('fs');


//read files
fs.readFile('./Documents/Example.txt',(err,data) => {
    if (err){
        console.log("File not found: Example.txt");
    }
    console.log(data.toString());
});


//write files
fs.writeFile('./Documents/Example_1.txt', 'SpaceX',() =>{
    console.log('File written')
})
//directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err) =>{
        if (err){
         console.log("Make Directory Failed");
        };
        console.log("Directory Created");
    })
}
//deleting folder
if (fs.existsSync('./assets')){
    fs.rmdir('./assets',(err) =>
    {
        if (err){
            console.log('Delete Error');
        }
        console.log("Directory Removed");
    })
}
//deleting file
if (fs.existsSync('./Documents/Example_1.txt')){
    fs.unlink('./Documents/Example_1.txt',(err) =>
    {
        if (err){
            console.log('Delete Error');
        }
        console.log("File Removed");
    })
}

// Streaming Files

//Large Data
var texter;
for (let i=0;i<1500;i++){
    for (let i=0;i<24;i++){
        texter = texter + "NASA ";
    }
    texter = texter + "\n"
}
//Create file with large data
fs.writeFile('./Documents/Example_2.txt', texter,() =>{
    console.log('File written')
})
//Stream large data
const readStream = fs.createReadStream('./Documents/Example_2.txt',{ encoding: 'utf8'});
const writeStream = fs.createWriteStream('./Documents/Example_3.txt');
/* Old Stream
readStream.on('data',(chunk) =>{
    writeStream.write('\n --New Chunk --');
    writeStream.write(chunk);
});
*/
// Piping
readStream.pipe(writeStream);


