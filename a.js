const fs = require('fs');

// fs.readFile('data.txt', 'utf8', (err, data) => {
//     if (err) return console.log(err);
//     console.log(data);
// });

// console.log('a');

function read(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) return callback(err, null);
        callback(null, data);
    });
}
// 
// console.log(read('data.txt'));

// try {
//     read('data.txt', (err, data) =>{
//         console.log(x);
//     });
// } catch(err) {
//     console.log('-------CO LOI--------');
// }
