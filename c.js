// x.com/38174837
const request = require('request');
const fs = require('fs');

// request('http://vnexpress.net', (err, data) => {
//     console.log(data);
// });

function readUrlAndSave(url, filename, cb) {
    request(url, (err, data, body) => {
        if (err) return cb(err);
        // console.log(data.body);
        console.log(Object.keys(data));
        fs.writeFile(filename, body, errWrite => cb(errWrite))
    });
}

readUrlAndSave('http://vnexpress.net', 'a.txt', err => console.log(err));
