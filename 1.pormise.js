const Promise = require('./promise');

let p = new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve('hello');
        // }, 1000);

        resolve(1000);
    })
    // 正常返回
    // p.then(data => {
    //     return data
    // }).then(data => console.log(data));

// 抛出错误
// p.then(data => {
//     throw new Error('Error!');
//      return undefined;
// }).then(
//     data => console.log(data), error => console.log(error)
// );

// 返回值
// p.then(data => {
//     return 100;
// }).then(
//     data => console.log(data), error => console.log(error)
// );

// 返回一个promise
p.then(data => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}).then(
    data => console.log(data), error => console.log(error)
);

// 返回自己的promise
// let promise2 = p.then(data => {
//     return promise2;
// })
// promise2.then(
//     data => console.log(data), error => console.log(error)
// );

// then方法抛出
// const obj = {};
// Object.defineProperty(obj, 'then', {
//     get() {
//         throw new Error('thenable throw error')
//     }
// })

// p.then(data => {
//     return obj;
// }).then(
//     data => console.log(data), error => console.log(error)
// );

// 返回一个数组
// p.then(data => {
//     return [1, 2, 3];
// }).then(
//     data => console.log(data), error => console.log(error)
// );

// 重复返回promise
// p.then(data => {
//     return new Promise(resolve => {
//         resolve(new Promise(resolve2 => resolve2(data)))
//     })
// }).then(data => console.log(data));