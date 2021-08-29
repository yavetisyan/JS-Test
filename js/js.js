//let user = {
//  // объект
//  name: "John", // под ключом "name" хранится значение "John"
//  age: 30, // под ключом "age" хранится значение 30
//};

//// delete user.name;

//console.log(user);

//let key; //  = prompt("enter name");

//// console.log(user[key]);
//console.log(user.key);

//let fruit; // = prompt("Какой фрукт купить?", "apple");

//let bag = {
//  fruit: 5,
//};

//console.log(bag.apple);

//let fruit2 = "apple";

//let bag2 = {
//  [fruit + "Computers"]: 9,
//};

//console.log(bag2.appleComputers);

//function makeUser(name, age) {
//  return {
//    name,
//    age: 30,
//  };
//}

//let user = {
//  name: "John",
//  age: 30,
//  isAdmin: true,
//};

//for (let key in user) {
//  console.log(key);
//  console.log(user[key]);
//}

//let codes = {
//  "+49": "Германия",
//  "+41": "Швейцария",
//  "+44": "Великобритания",
//  // ..,
//  "+1": "США",
//};

//for (let code in codes) {
//  console.log(+code);
//}

//let user = {};

//user.name = "John";
//user.surname = "Smith";
//user.name = "Pete";
//delete user.name;

//let schedule = {};

//console.log(isEmpty(schedule));

//schedule["8:30"] = "get up";
//console.log(isEmpty(schedule));

//function isEmpty(obj) {
//  for (let key in obj) {
//    return false;
//  }
//  return true;
//}

//let salaries = {
//  John: 100,
//  Ann: 160,
//  Pete: 130,
//};

//let sum = 0;
//for (let key in salaries) {
//  sum += salaries[key];
//}
//console.log(sum);

//let menu = {
//  width: 200,
//  height: 300,
//  title: "My menu",
//};

//function multiplyNumeric(obj) {
//  for (let key in obj) {
//    if (typeof obj[key] === "number") {
//      obj[key] *= 2;
//    }
//  }
//}

//multiplyNumeric(menu);

//console.log(menu);

//-------------------------

//let message = "Hello!";
//let pharse = message;

//let user = {
//  name: "Yura",
//  age: 30,
//};

//let admin = user;

//admin.name = "Petr";
//console.log(user.name);

//let clone = {};

//for (let key in user) {
//  clone[key] = user[key];
//}
//console.log(clone);
//clone.name = "Yura";
//console.log(clone.name);

//let permissions1 = { canView: true };
//let permissions2 = { canEdit: true };

//Object.assign(user, permissions1, permissions2);

//console.log(user);

//let clone1 = Object.assign({}, user);

//console.log(clone);

//let user1 = {
//  name: "Yura",
//  sizes: {
//    height: 182,
//    width: 50,
//  },
//};

//console.log(user1.sizes.height); // 182

//let clone2 = Object.assign({}, user1);

//console.log(user1.sizes === clone2.sizes);
//user1.sizes.width++;
//console.log(clone2.sizes.width);

// ----------------------------

// Объект пользователя
//let user = {
//  name: "Джон",
//  age: 30,
//};

//user.sayHi = function () {
//  console.log("hellooooo");
//};

//user.sayHi();

//let user1 = {};

//function sayHi() {
//  console.log("Privet");
//}

//user1.sayHi = sayHi;
//user1.sayHi();

//let user2 = {
//  sayHi() {
//    console.log("Ola");
//  },
//};

//user2.sayHi();

//let user3 = {
//  name: "Джон",
//  age: 30,

//  sayHi2() {
//    console.log(this.name);
//  },
//  bye() {
//    console.log("Bye baby");
//  },
//};

//user3.sayHi2();

//let user4 = { name: "John" };
//let admin4 = { name: "Admin" };

//function sayHi() {
//  console.log(this.name);
//}

//user4.f = sayHi;
//admin4.f = sayHi;

//user4.f();
//admin4.f();
//admin4["f"]();

//console.log(user);

//user3.name === "Джон" ? user3.sayHi2 : user.bye();

//let user = {
//  name: "Джон",
//  go: function () {
//    alert(this.name);
//  },
//};
////Джон

//let calc = {
//  read() {
//    //  this.a = +prompt("enter a number");
//    // this.b = +prompt("enter b number");
//  },
//  sum() {
//    return `${this.a} + ${this.b} = ${this.a + this.b}  `;
//  },
//  mul() {
//    return `${this.a} * ${this.b} = ${this.a * this.b}  `;
//  },
//};

//calc.read();
//console.log(calc.sum());
//console.log(calc.mul());

//let ladder = {
//  step: 0,
//  up() {
//    this.step++;
//    return this;
//  },
//  down() {
//    this.step--;
//    return this;
//  },
//  showStep: function () {
//    // показывает текущую ступеньку
//    console.log(this.step);
//    return this;
//  },
//};

//ladder.up().up().down().showStep(); // 1

// --------------

//let obj1 = {
//  name: "Yura",
//  age: 33,
//  info: {
//    skills: ["html", "css"],
//  },
//};
//let obj2 = {
//  name: "Ivan",
//  surname: "Avetisyan",
//};

//let newObj = Object.assign({}, obj1, obj2);

//newObj = Object.assign({}, obj1);

//console.log(newObj);

//console.log(newObj.info == obj1.info);

//let keys = Object.keys(obj2);

//console.log(keys);

//let values = Object.values(obj2);
//console.log(values);

//let entries = Object.entries(obj2);

//console.log(entries);
//let fromEntr = Object.fromEntries([["a", "value"]]);
//console.log(fromEntr);

// --------------------

//prompt("Enter some String");
//let str =  "there are no two words in the english language more harmful than 'good job'. aa";

//let str4 = "dfgjkloyp"; // aweyoolp

//let a = [-3, 0, 6, -9];
//let i;

//function bigArr(arr) {
//  arr.forEach((el) => {
//    return el;
//  });
//}

//console.log(bigArr(a));

// ----- reduce ------

//console.log(
//  arr.reduce(function (acc, el, i, arr) {
//    return acc * el;
//  })
//);

//let arr = [
//  {
//    name: "Yura",
//    surname: "Avetisyan",
//    age: 33,
//    gender: false,
//  },

//  {
//    name: "Anna",
//    surname: "Panosyan",
//    age: 32,
//    gender: true,
//  },

//  {
//    name: "Anya",
//    surname: "Kosyan",
//    age: 25,
//    gender: true,
//  },
//];

//let res = arr.reduce(function (acc, el, i) {
//  return acc + el.surname + (i === arr.length - 1 ? "" : ", ");
//}, "");

//console.log(res);

//let res1 = arr.reduce(function (acc, el, i) {
//  acc.push(`${el.name} ${el.surname}`);
//  return acc;
//}, []);

//console.log(res1);

//let rec2 = arr.reduce(function (obj, el) {
//  obj[el.name] = el.surname;
//  return obj;
//}, {});

//console.log(rec2);

////-------------------

//let obj = {
//  start: 2,
//  end: 10,
//};

//for (const key of "Barev") {
//  console.log(key);
//}

//let arr2 = [5, 2, 7, 3, 7, 6];

//function bubleSort(arr) {
//  for (let j = 0; j < arr.length; j++) {
//    let moved = false;
//    for (let i = 0; i < arr.length && moved; i++) {
//      console.log(arr[j]);

//      if (moved) {
//        continue;
//      }

//      if (arr[i] > arr[i + 1]) {
//        moved = true;
//        let tmp = arr[i];
//        arr[i] = arr[i + 1];
//        arr[i + 1] = tmp;
//      }
//    }
//  }
//  return arr;
//}

//console.log(bubleSort(arr2));

////-------------------------

//let a = arr.reduce(function (acc, el, i) {
//  acc[el.name] = el.surname;
//  return acc;
//}, {});

//console.log(a);


// buble sort



function bubblelSort1(arr) {
  //debugger;
  for (let i = 0; i < arr.length; i++) {
    let moved = false;
    for (let j = 0; j < arr.length; j++) {
      moved = false;
      console.log("asd");
      if (arr[j] > arr[j + 1]) {
        moved = true;
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
    if (!moved) {
      break;
    }
  }
  return arr;
}

console.log(bubblelSort1(arr3));

//---------------------------------

let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let checked;
  do {
    checked = false;
    for (let i = 0; i < len; i++) {
      console.log("asd");
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        checked = true;
      }
    }
  } while (checked);
  return inputArr;
};

console.log(bubbleSort(arr2));




function node(arr) {
  let out = {};
  //debugger


  let a = arr.reduce(function (acc, el, ind) {
    acc[el.id] = el.parent;
    return acc;
  }, {});

  let keys = Object.keys(a);
  let value = Object.values(a);
  //debugger;
  console.log(value);

  for (let key in a) {
    let val = a[key];
    let arrObj = {};
		let nestKey = {};

    value.filter(function (el, ind) {
      if (val !== null && val == el) {
				arrObj[val] = ind;
				nestKey[el]=arrObj
      }

    });
		
		console.log(nestKey);
    //if(a[key])
    //	console.log(a[key]);
  }
}

console.log(node(treeNodes));



let arr1 = [1, 5, 6,9,8,7,2,3];

function merge(arr1, arr2) {
  let res = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      res.push(arr1.shift());
    } else {
      res.push(arr2.shift());
    }
  }
  return res.concat(arr2, arr1);
}

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  const letfPart = arr.slice(0, mid);
  const rightPart = arr.slice(mid);

  return merge(mergeSort(letfPart), mergeSort(rightPart));
}

console.log(mergeSort(arr1));
