console.log(1);
//=====================================================================
// function getNumber(){
//     var p = new Promise(function(resolve, reject){
//         //做一些异步操作
//         setTimeout(function(){
//             var num = Math.ceil(Math.random()*10); //生成1-10的随机数
//             if(num<=5){
//                 resolve(num);
//             }
//             else{
//                 reject('数字太大了');
//             }
//         }, 200);
//     });
//     return p;
// }
//
// getNumber()
// .then(function(data){
//     console.log('resolved');
//     console.log(data);
//     console.log(somedata); //此处的somedata未定义
// })
// .catch(function(reason){
//     console.log('rejected');
//     console.log(reason);
// });


// getNumber()
// .then(
//     function(data){
//         console.log('resolved');
//         console.log(data);
//     },
//     function(reason){
//         console.log('rejected');
//         console.log(reason);
//     }
// );

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成1');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成2');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成3');
            resolve('随便什么数据3');
        }, 1000);
    });
    return p;
}


// Promise
// .all([runAsync1(), runAsync2(), runAsync3()])
// .then(function(results){
//     console.log(results);
// });
Promise
.race([runAsync1(), runAsync2(), runAsync3()])
.then(function(results){
    console.log(results);
});

// runAsync()
// .then(function(data){
//     console.log(data);
// });

// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     // return runAsync3();
//     return '直接返回数据';
// })
// .then(function(data){
//     console.log(data);
// });
