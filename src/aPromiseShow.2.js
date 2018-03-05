

var willIGetNewPhone = function(isMomHappy){
    return new Promise(function(resolve, reject){
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
}



var youpi = function(phone){
    return new Promise(
        function(resolve, reject){
            var message = 'Thanks Mom for the ' + phone.brand + ' phone!';
            console.log(message);
            phone.price = 1495;
            resolve(phone);
        }
    )
}

var showOff = function(phone){
    return new Promise(
        function(resolve, reject){
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone! it costs ' + phone.price + '$!';

            resolve(message);
        }
    );
};


var askMom = function(isHappy = true){
    isMomHappy = isHappy;
    willIGetNewPhone(isMomHappy)
        .then(youpi)
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)
        )
        .catch(error => console.log(error.message)
        );
};

askMom(true);