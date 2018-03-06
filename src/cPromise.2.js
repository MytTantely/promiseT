// get the result by calling an API

let resultA, resultB, resultC;

function addAsync (num1, num2) {
    return new Promise((resolve,reject) => {
        console.log(`i=${num1}, j=${num2}`);
        if(num1 === null || num1 === undefined || num2 === null || num2 === undefined ){
            const errMsg = `Please double check the parameters, num1:${num1}, num2:${num2}`;
            const reason = new Error(errMsg);
            reject(reason);
        }

        setTimeout(() => {
            n1 = parseInt(num1);
            n2 = parseInt(num2);
            resolve(n1 + n2);
        }, 1);
    });
    
}

async function run(i, j){
    try{
        resultA = await addAsync(i,j);
        resultB = await addAsync(resultA, j + 1);
        resultC = await addAsync(resultB, j + 2);

        console.log('total = ' + resultC);
        console.log(resultA, resultB, resultC);
    }catch(err){
        console.log('error: ' + err.message);
    }
};

console.log('Before run');
run(process.argv[2], process.argv[3]);
// run(1,2);
console.log('After run');

// (async () => {
//     resultA = await addAsync(1,2);
//     resultB = await addAsync(resultA, 3);
//     resultC = await addAsync(resultB, 4);

//     console.log('total = ' + resultC);
//     console.log(resultA, resultB, resultC);
// })();


