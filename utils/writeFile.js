// require our file work
const fs = require('fs');

// create a function with our own promises to write to readme file in dist
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve( {
                ok: true,
                message: 'Readme File Created!'
            });
        } );
    });
}