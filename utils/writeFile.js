// require our file work
const fs = require('fs');

// create a function with our own promises to write to readme file in dist
//creating a function that returns a promise
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            //if theres an error, reject the Promise and send the error to the Promises '.catch()' method
            if(err) {
                reject(err);
                //return out of the function to make sure Promise doesnt execute
                return;
            }
            //if everything went well, resolce the Promise and send data to .then
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
   
};

module.exports = writeFile;