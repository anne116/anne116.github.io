/*
Assignment A: Complete the function below to show a delayed result in the console.
Hint: You should use setTimeout() for time scheduling.
*/

function delayedResult(n1, n2, delayTime, callback) { 
    let result = n1 + n2;
    setTimeout( () => {
        console.log(result)
    }, delayTime );
};

delayedResult(4, 5, 3000, function (result) {
console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds

delayedResult(-5, 10, 2000, function (result) { console.log(result);
}); // 5 (-5+10) will be shown in the console after 2 seconds