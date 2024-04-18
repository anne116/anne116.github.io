/*
Assignment C: To implement it using async/await this time.
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


async function main(n1, n2, delayTime) {
    // your code here, you should call delayedResultPromise here and get the result using async/await.
    try {
        const resultAsync = await delayedResultPromise(n1, n2, delayTime);
        console.log(resultAsync);
    }
    catch (error) {
        console.error(error);
    }
    }

    main(4, 5, 3000); // result will be shown in the console after <delayTime> seconds

    