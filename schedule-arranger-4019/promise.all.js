var taskA = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('taskA');
        resolve();
    }, 16);
});

var taskB = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('taskB');
        resolve();
    }, 10);
});

var before = new Date();
Promise.all([taskA, taskB]).then(function () {
    var after = new Date();
    var result = after.getTime() - before.getTime();
    console.log(result);
});