 
let num = '0123456789';
 let alphbate = 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRTUVWXYZQ';
 let symblo = '@$%&*()[]+-';

 let allSum = num + alphbate + symblo;

let a = allSum[Math.floor(Math.random()* allSum.length)]
// console.log(a);
let length =12;
let show = document.getElementById('show')

function passwordGenrate() {
    let password ="";
    password += num[Math.floor(Math.random()* num.length)]
    password += alphbate[Math.floor(Math.random() * alphbate.length)]
    password += symblo[Math.floor(Math.random() * symblo.length)]
    //console.log(password);
    while (length > password.length){
        password += allSum[Math.floor(Math.random() * allSum.length)]
    }
   // console.log(password);
    show.innerText=password;
    
}
//passwordGenrate()
document.getElementById('btn').addEventListener('click', passwordGenrate)