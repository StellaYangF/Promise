const Pormise = require('./promise');

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('error');
    }, 1000);
})

p.then().then(null, err => console.log(err));
// p.then('123', err => console.log(err));