/**
 * Create a promise which choose a random number between 0 and 10.
 * Resolve if the number is odd or even and show through the console 
   a message with the number.
 * Then set a time out.


 * Finally, with a promise get access to the Giphy site trendings and 
   access to documentation of the Endpoint.
 */


 //Random number promise
let mi_promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

        if(number % 2 === 0){
            resolve(`finalizo con exito${number}`);
            console.log(number);
        }else{
            reject(`Rechazada${number}`)
            console.log(number);
        }
   
});

mi_promesa.then((successMessage) => {
    console.log(`finalizo con exito`);
}).catch((errorMessage) => {
    console.log(`Rechazada`);
});


//SetTimeOut


let mi_promesa = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10);

    setTimeout(function(){
        if(number % 2 === 0){
            resolve(`finalizo con exito${number}`);
            
        }else{
            reject(`Rechazada${number}`)
           
        }
    }, 2000)
        
});

mi_promesa.then((successMessage) => {
    console.log(successMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});


//Promise to access Endpoint Giphy


let obtenerTrendings = trendings => {
    fetch(`https://api.giphy.com/v1/trending`)
        .then(response => response.json())
        .then(json => {
            console.log(json.data);
        })
        .catch(error => console.log(error))
};

obtenerTrendings(url);
​






