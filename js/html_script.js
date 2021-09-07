//let div = document.getElementsByTagName("div");
//console.log(div);

//let name = document.getElementsByName("email");
//console.log(name);

//let id = document.getElementById("div5");

//console.log(id);

//let clas = document.getElementsByClassName("asd");
//console.log(clas);

//let query = document.querySelector("div");
//console.log(query);

//let queryAll = document.querySelectorAll("div");
//console.log(queryAll);

//let queryClass = document.querySelectorAll(".asd");
//console.log(queryClass);

//let attr = document.querySelectorAll("[attr1]");
//console.log(attr);

//let moreAttr = document.querySelector("[attr1 = attr1]#div5 .asd div ");
//console.log(moreAttr);

//console.log(id.getElementsByClassName("asd"));

//let elemWithsAClass = document.getElementsByClassName("asd");

//console.log(elemWithsAClass);

//let newDiv = document.createElement("div");

//newDiv.classList.add("asd");
//document.body.append(newDiv);

//newDiv = document.createElement("span");
//console.log(newDiv);

//newDiv.cloneNode();
//console.log(newDiv);

//let myDiv5 = document.getElementById("div5");
//console.log(myDiv5);

//console.log(myDiv5.cloneNode(true));

//let newD = document.getElementById("div7");

//newD.prepend("start");
//newD.append("end");

//myDiv5.append(newD)

// events

//let div2 = document.getElementById('div2')

////div2.onclick = function(){
////	console.log('Onclick function');
////}

////div1.onclick = null;

//div2.addEventListener('click', function () {
//	console.log('add event listener');
//  })

//function onDivClick() {
//	console.log('asd');
//}

// ---------------------

//let a = 10;

//function f1() {
//  console.log("(global) a = " + a);
//}

////f1();

//// ---------------------

//function f2() {
//  a = 33;
//  console.log("(local) a = " + a);
//}

////f2();

//// -----------------

//function createStep(n = 0) {
//  let count = n;

//  return function () {
//    count++;
//    console.log(count);
//  };
//}

////let step1 = createStep();
////let step2 = createStep(200);

////step1();
////step1();
////step2();
////step1();
////step1();
////step2();

////-----------------------------

//function randomInteger(min, max) {
//  let rand = min - 0.5 + Math.random() * (max - min + 1);
//  return Math.round(rand);
//}

//function createBegger() {
//  let s = 0;

// return  function beggar() {
//    s += randomInteger(0, 100);
//    console.log(s);
//    if (s >= 250) return;
//    beggar();
//  }
//}

//let begg1 = createBegger();
//let begg2 = createBegger();
//begg1();
//console.log('------------');
//begg2();

//----apply, call,  bind-----------------

let count = 0;

let btn1 = document.querySelector(".b-1");
let btn2 = document.querySelector(".b-2");
let btn3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out-3");
let out4 = document.querySelector(".out-4");

function f1() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

//btn1.addEventListener("click", f1);

//const f2 = () => {
//  console.log(count);
//  console.log(this);
//  this.textContent = count;
//  count++;
//};

//btn2.addEventListener("click", f2);

//call

//f1.call(btn1);

document.querySelector(".b-1").addEventListener("click", () => {
  f1.call(document.querySelector(".b-2"));
});

function f3(count) {
  console.log(count);
  console.log(this);
  this.textContent = count;
}

btn3.addEventListener("click", () => {
  count++;
  f3.call(btn2, count);
});

function sum1(a, b) {
  this.innerHTML = a + b;
}

btn2.addEventListener("click", () => {
  sum1.call(out3, 37, 4);
  sum1.apply(out4, [37, 4]);
});
