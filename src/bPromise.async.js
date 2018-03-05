
const willIGetAPhone = async function willIGetAPhone(isMomHappy) {
    return new Promise( (resolve, reject) => {
        if(isMomHappy == true){
            const newPhone = {
                brand:  'Samsung',
                color:  'black'
            };
            const store = {
                city: 'Calgary',
                name: 'Best Buy'
            };

            const mainObj = {
                store: store,
                phone: newPhone
            }
            resolve(mainObj);
        }else{
            const message = "Mom is not happy!";
            const reason = new Error(message);
            reject(reason);
        }
    });
}

const thanksMom = async function thanksMom (success){
    return new Promise((resolve, reject) => {
        const message = `Thanks Mom for my new ${success.phone.brand} phone! `;
        console.log(message);
        
        resolve(success);
    });
};

const showOff = async function showOff (success){
    return new Promise((resolve, reject) => {
        const message = `Hey! I got a new ${success.phone.color} ${success.phone.brand} phone Guys! It is from ${success.store.name}!`;
        console.log(message);
        resolve(success);
    });
};


const askMom = async function askMom (happyMom) {
    // willIGetAPhone(happyMom)
    //     .then(thanksMom)
    //     .then(showOff)
    //     .catch(err => console.log(err.message))
    try{
        let phone = await willIGetAPhone(happyMom);
        console.log(`Phone: ${JSON.stringify(phone)}`);
        let aPhon = await thanksMom(phone);
        console.log(`APhone: ${JSON.stringify(aPhon)}`);
        let bPhon = await showOff(aPhon);
        console.log(`bPhone: ${JSON.stringify(bPhon)}`);
    }catch(err){
        console.log(err.message);
    }
    
}

let arg = process.argv[2]
if(arg !== null){
    arg = (arg === 'true' || arg === 'TRUE');
    askMom(arg);
}else{
    askMom();
}