import * as os from "os";


var promise =new Promise(function(resolve,reject){
    //To Do 要异步执行的事情，这个异步执行的事情有可能成功执行完毕，那么Promise将是fulfilled状态，如果执行失败则是rejected;
    //下面测试代码，人为设置为rejected状态;
    // reject("将当前构建的Promise对象的状态由pending（进行中）设置为rejected（已拒绝）"); //当然此处也可以设置为fulfilled(已完成)状态
    resolve("------------");
})

promise.then(//调用第一个then()
    success=>{
        console.log("异步执行成功，状态为：fulfilled，成功后返回的结果是："+success);
        return(" 当前 success ");
    },
    error=>{
        console.log("异步执行失败，状态为rejected，失败后返回的结果是："+error);
        return(" 当前 error ");
    }
).then(
    //调用第二个then() 因为调用第一个then()方法返回的是一个新的promise对象，此对象的状态由上面的success或者error两个回调函数的执行情况决定的：
    //如果回调函数能正常执行完毕，则新的promise对象的状态为fulfilled，下面执行success2,如果回调函数无法正常执行，则promise状态为rejected;下面执行error2
    success2=>{
        console.log("第一个then的回调函数执行成功 成功返回结果："+success2);
        throw(" 当前 success2 ");//自定义异常抛出
    },
    error2=>{
        console.log("第一个then的回调函数执行失败 失败返回结果："+error2);
        return(" 当前 error2 ");
    }
).catch(err=>{
    //当success2或者error2执行报错时，catch会捕获异常;
    console.log("捕获异常："+err);
});

//上述代码,打印如下:
//异步执行失败，状态为rejected，失败后返回的结果是：将当前构建的Promise对象的状态由pending（进行中）设置为rejected（已拒绝）
//第一个then的回调函数执行成功 成功返回结果： 当前 error
//捕获异常： 当前 success2