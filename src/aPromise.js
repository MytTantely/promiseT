var isMomHappy = true;

var willIGetNewPhone = new Promise(function(resolve, reject){
    if(isMomHappy){
        var phone = {
            brand: 'Samsung',
            color: 'black'
        };
        resolve(phone);//fulfilled
    }else{
        var reason = new Error('mom is not happy');
        reject(reason); //reject
    }
});

var askMom = function(){
    willIGetNewPhone
        .then(function(fulfilled){
            console.log(fulfilled);
        })
        .catch(function(error){
            console.log(error.message);
        })
}

askMom();