'use strict';

let base64 = require('base-64');
let bcrypt = require('bcrypt');

// base 64 encode and decode
console.log('---- BASE 64 ------');

// encoding is not secure. we need always to encrypt our password
// before saving to db

let text = 'anyusername:anypassword';

let encoded = base64.encode(text);
let decoded = base64.decode(encoded);

console.log(`Text: ${text}`);
console.log(`encoded: ${encoded}`);
console.log(`decoded: ${decoded}`);

console.log('---- END BASE 64 ------');

console.log('---- HASHING - ENCRYPTION ------');

let password = 'anypassword';
let complexity = 10;// this is the salt rounds

encrypt(password, complexity);

/*
* It's recomended to use async for bcrypt as it's CPU intensive.
*/
async function encrypt(password, complexity) {
    // generate a hash from the palin text password, running it through the same aglorithm a few times.
    let hash = await bcrypt.hash(password, complexity);
    console.log(hash);
    
    // bcrypt.genSalt(10, function(err, salt) {
    //     console.log('sssssssssssssssssssssss',salt);
    // });


    let hashed1 =  '$2b$10$O8av74ERyFARpXrtZkoK4.8LLqwwxWhw9HhLsp6T0luNMBH0m4Ir2';

    let hashed2 = '$2b$10$irxhtBNZ8iajNX/8DmHePO1M6GquLetua9t2/UQ/5TTaXUST3OK6a';

    let hashed3 = '$2b$10$irxhtBNZ8iajNX/8DmHePO1M6GquLetua9t2/UQ/5TTaXUST3OK6b';

    //$2b$10$SQWaENC4pactpLmUToT71uB.aJ4ECIELEqrUPP7nMrjM8DJjMjWwK
    // salt
    let isHash1Valid = await bcrypt.compare(password, hashed1);
    let isHash2Valid = await bcrypt.compare(password, hashed2);
    let isHash3Valid = await bcrypt.compare(password, hashed3);

    console.log(`isHash1Valid: ${isHash1Valid}`);
    console.log(`isHash2Valid: ${isHash2Valid}`);
    console.log(`isHash3Valid: ${isHash3Valid}`);
}

console.log('---- END HASHING - ENCRYPTION ------');
