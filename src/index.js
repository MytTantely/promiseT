const fs = require('fs');

// fs.readFile('../data/data_short.csv', (err, data) => {
//     if(err) throw err;
//     //...
//     fs.writeFile('../data/copy-data.csv', (err, data) => {

//     });
// });

fs.createReadStream('./data/data_short.csv')
    .pipe(fs.createWriteStream('./data/copy-data.csv'));