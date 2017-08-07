const fs = require('fs');

const data = fs.readFileSync('./data.txt', 'utf8');
console.log(data);

// Khong phai cai gi truyen vao function cung la bat dong bo
// Da la bat dong bo thi se co tham so la callback
let a;
setTimeout(() => a = 10, 500);
console.log(a);

// single thread 
// 1s
