//// callback function

//function showMessage(text, name) {
//  console.log(`${text}, ${name}`);
//}

////setTimeout(showMessage, 3000, "hello", "Yura");

////setInterval(showMessage, 500, "hello", "Yura");

//function showName() {
//  console.log("Vasya");
//}
//setTimeout(showName, 0);
//console.log("kolya");

//let inp1 = document.querySelector(".inp1");
//let inp2 = document.querySelector(".inp2");
//let btn = document.querySelector(".btn");
//let result = document.querySelector(".res");

//btn.onclick= function () {
//  	let x = +inp1.value;
//		let y = +inp2.value

//		return result.innerHTML = x *y;
//};

let people = {
  person1: {
    name: "Yura",
    surname: "Avetisyan",
    age: 33,
    smokes: "Iqos",
  },
  person2: {
    name: "Seryan",
    surname: "Tadevosyan",
    age: 36,
    smokes: false,
  },
  greatings: "Hello JS",
};

let objKeys = Object.keys(people);

//console.log(objKeys);

let objValues = Object.values(people);
//console.log(objValues);

let x = {
	name:'Joe',
	age:46,
	address:{
		city:'Yerevan',
		street:'Zeytun',
		aprtNUm:44,
	},
	friends:[
		{
			name:'Mike',
			age:23,
		},
		{
			name: 'Jane',
			age:65,
		}
	]
};

