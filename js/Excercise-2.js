// Excercise-2 Code in JavaScript
const btn=document.querySelector("#result");
const mathObj=document.querySelector("#mathObj");
let userNumber=document.getElementById("num");
let elm=document.getElementById("codes");
let result=0;
btn.onclick=(event)=>{
    event.preventDefault();
    let val=mathObj.value;
    if (val == "ceil")
    {
        result=Math.ceil(userNumber.value);
    }
    else if(val=="floor")
    {
        result=Math.floor(userNumber.value);
    }
    else if(val=="round")
    {
        result=Math.round(userNumber.value);
    }
    else if(val=="sqrt")
    {
        result=Math.sqrt(userNumber.value);
    }
    else if(val == "pi")
    {
        result=Math.PI;
    }
elm.innerHTML=`<p>The result of ${val} is :${result}</p>`;
}

// Learn somting about variable scope that is value added

// ECMAScript 2015- Introduced two keywords let and const. let keyword not fully supported in IE-11 or before

// 1- global scope using var keyword

// var myname="Madan";
// function user()
// {
//     var myname="gopal";
//     console.log(`My name is : ${myname}`);
// }
// user();
// console.log(`My name is : ${myname}`);



// 2- Function Scope using var keyword
// function user()
// {
//     var myname="gopal";
//     console.log(`My name is : ${myname}`);
// }
// user();
// console.log(`My name is : ${myname}`); //variable cannot be accessed


//JavaScript Block Scope using var keyword
// var i=10;
// if (i==10)
// {
//     i=12;
// }
// console.log(`My variable has been changed : ${i}`); // var keyword is not applicable for block scope


//JavaScript Block Scope using let keyword
// let i=10;
// if (i==10)
// {
//   let  i=12;
//   console.log(`I am inside block: ${i}`);
// }
// console.log(`I am outside block : ${i}`); //let keyword is used to declare variable in block scope

// Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed:

// var i=10; 
// if (i==10)
// {
//   var  i=12;  //allowed
//   console.log(`I am inside block: ${i}`);
// }
// console.log(`I am outside block: ${i}`);

// let i=10; 
// var i=12;  //not allowed
// if (i==10)
// {
//   let  i=12;  //allowed
//   console.log(`I am inside block: ${i}`);
// }


// Hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time (if you don't know what Hoisting is, read our Hoisting Chapter).

// Meaning: You can use the variable before it is declared:
// carName = "Volvo";
// alert(carName);
// var carName;

// Variables defined with let are hoisted to the top of the block, but not initialized.

alert(carName);
let carName;
carName = "Volvo";