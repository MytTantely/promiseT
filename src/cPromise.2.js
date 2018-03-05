// get the result by calling an API

let resultA, resultB, resultC;

async function addAsync (num1, num2) {
    return new Promise((resolve,reject) => {
        if(num1 === null || num1 === undefined || num2 === null || num2 === undefined ){
            const errMsg = `Please double check the parameters, num1:${num1}, num2:${num2}`;
            const reason = new Error(errMsg);
            reject(reason);
        }

        setTimeout(() => {
            resolve(num1 + num2);
        }, 100);
    });
    
}

resultA = await addAsync(1,2);
resultB = await addAsync(resultA, 3);
resultC = await addAsync(resultB, 4);

console.log('total = ' + resultC);
console.log(resultA, resultB, resultC);