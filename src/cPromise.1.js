// get the result by calling an API

let resultA, resultB, resultC;

function addAsync (num1, num2) {
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

addAsync(1,2)
    .then(success => {
        console.log(success);
        return addAsync(success, 3);
    })
    .then(success => {
        console.log(success);
        return addAsync(success, 4)
    })
    .then(success => console.log(success))
    .catch(error => console.log(error.message));