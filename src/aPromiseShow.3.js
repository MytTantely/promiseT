const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy){
        const phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);
    }else{
        const reason = new Error('Mom is not happy');
        reject(reason);
    }
});

// 2nd promise
async function showOff(phone){
    return new Promise(
        (resolve, reject) => {
            const message = 'Hey friend, I have a new '
        }
    );
}