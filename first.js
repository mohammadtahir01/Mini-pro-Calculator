// let store = "";

// let calcul=(value)=>{
//     store = store + value;
//     let ab = document.querySelector("#display");
//     ab.innerHTML = store;
// }

function calcul(val){
    document.querySelector("#display").value += val;
}

function clr(){
    document.querySelector("#display").value = " ";
}

function DE(){
    document.querySelector("#display").value = document.querySelector("#display").value.slice(0,-1);;
}

function solve(){
   let x= document.querySelector("#display").value;
   let y = eval(x);
   document.querySelector("#display").value = y;
}

function sq(){
    document.querySelector("#display").value;
    let x = document.querySelector("#display").value;
    let y = x*x;
    document.querySelector("#display").value = y;
    

}