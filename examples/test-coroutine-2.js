import * as os from "os";



const promise = new Promise((resolve, reject) => {
    // 异步操作
    os.setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('success');
        } else {
            reject('error');
        }
    }, 1);
});

promise.then(result => {
    console.log("then1=",result);
    resolve("then1 finish");
}).then(result => {
    console.log("then2=",result);
}).catch(error => {
    console.log("catch=", error);
}).finally(function () {
    console.log("End");
})