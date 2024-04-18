/*
Assignment B: To implement delayedResult again using promise this time.It should look like:
*/

function delayedResultPromise(n1, n2, delayTime) { 
    const result = n1 + n2 ;
    const resultPromise = new Promise( (resolve, reject) => {
        setTimeout( () => {
        if ( !isNaN(result) ) {
            resolve(result);
        } else {
            reject(Error('Something is wrong. Please check the number you input'));
        }
        }, delayTime);
    });
    return resultPromise;
}


delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds