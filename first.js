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
    document.querySelector("#display");
}