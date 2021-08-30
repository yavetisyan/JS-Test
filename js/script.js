//let o = {};
//console.log(o);

//let car = {
//  brand: "Yeraz",
//  year: 1982,
//  isConfortable: true,
//  444: "asdasdasd",
//};

//console.log(car);
//console.log(car.asdasdasd);
//console.log(car.year);
//console.log(car.isConfortable);

//car.year = 1980; // change

//console.log(car);

//car.color = "white"; // add
//console.log(car);

//car.asd = undefined;

//console.log(car.asd);
//console.log(car.asdas);

//console.log(car.hasOwnProperty("asd")); // has property car.asd

//if (car.hasOwnProperty("aasd") === true) {
//  console.log("yes");
//} else console.log("NO");

//console.log("brand" in car);

//// -----------------------

//console.log(car["brand"]);
//console.log(car["color"]);

//let keyOfCar = "444";

//console.log(car[keyOfCar]);

//keyOfCar = "color";

//console.log(car[keyOfCar]);

//car["color"] = "black";

//console.log(car);
//car["interier_color"] = "white";
//console.log(car);
//console.log("-----------------");
//for (let someName in car) {
//  console.log(someName);
//}
//console.log("-----------------");

//for (let someName in car) {
//  console.log(car[someName]);
//}
//console.log("-----------------");

//let car1 = car;
//car.asd = null;
//console.log(car1.asd);

//console.log("-----------------");

////let a = {
////  asd: "asd",
////};
////let b = {
////  asd: "asd",
////};
////  a === b    not equal

////console.log(a === b); // false

//car.go = function (speed) {
//  car.speed = speed;
//};

//car.go(25);

//console.log(car);

//car.stop = function () {
//  car.speed = 0;
//};
//car.stop();

//console.log(car);

//console.log("-----------------");

//let a = {
//  asd: "aaa",
//  dsa: "ddd",
//};
//let b = {};
//for (let key in a) {
//  b[key] = a[key];
//}

//console.log(b);

////function cloneObj(obj) {
////  let cloneObj = {};

////  for (let a in obj) {
////    cloneObj[a] = obj[a];
////  }
////  return cloneObj;
////}

////function cloneObj(obj) {
////  let cloneObj = {};

////  for (let a in obj) {
////    if (typeof obj[a] === "object" && obj[a] !== null) {
////      let cloneNestObj;

////      if (Array.isArray(obj[a])) {
////        cloneNestObj = [];
////      } else {
////        cloneNestObj = {};
////      }

////      for (let asd in obj[a]) {
////        cloneNestObj[asd] = obj[a][asd];
////      }
////      cloneObj[a] = cloneNestObj;
////    } else {
////      cloneObj[a] = obj[a];
////    }
////  }
////  return cloneObj;
////}

//let oClone;

//oClone = cloneObj;

//console.log(oClone === o); //false

//cloneCar = cloneObj(car);
//console.log(cloneCar);
//console.log(cloneCar === car); // false

//console.log("-----------------");

//car.passengers = [
//  {
//    name: "Gago",
//  },
//  {
//    name: "Vacho",
//  },
//  {
//    name: "Qajo",
//  },
//];

//console.log(car);

//let cloneCar1 = cloneObj(car);

//console.log(cloneCar1);
//console.log(cloneCar1 === car); //false
//cloneCar1.color = "red";

//console.log(car);

//console.log(cloneCar1.passengers === car.passengers); // true

//console.log("---------------");

//let cloneCar2;

//cloneCar2 = cloneObj(car);

//let cloneCar3;

//cloneCar3 = cloneObj(car);
//console.log(cloneCar3.passengers === car.passengers); //false

//cloneCar3.passengers.push({ name: "asdassdd" });
//console.log(cloneCar3.passengers);

//cloneCar3.passengers.push(445);

//console.log(cloneCar3.passengers);

//cloneCar3.passengers[0].name = "Gagik";
//console.log(cloneCar3);
//console.log(car);

//function cloneObj(obj) {
//  let cloneObj = {};

//  for (let a in obj) {
//    if (typeof obj[a] === "object" && obj[a] !== null) {
//      let cloneNestObj;

//      if (Array.isArray(obj[a])) {
//        cloneNestObj = [];
//      } else {
//        cloneNestObj = {};
//      }

//      for (let asd in obj[a]) {
//        cloneNestObj[asd] = obj[a][asd];
//      }
//      cloneObj[a] = cloneNestObj;
//    } else {
//      cloneObj[a] = obj[a];
//    }

//    cloneObj[a] = obj[a];
//  }
//  return cloneObj;
//}

//cloneCar3.passengers.push({ age: 33 });

//console.log(cloneCar3);

//console.log("------------");

//function makeCar(colorAsd, model, brand, go) {
//  const car = {
//    color: colorAsd,
//    model: model,
//    brand, // if key = value  we can type only key name
//    year: 2021,
//    go,
//    stop() {
//      car.speed = 0;
//    },
//    speed: 0,
//  };
//  return car;
//}

//let bmw = makeCar("white", "x6", "bmy");

//let yeraz = makeCar("green", "x5", "yeraz");
//console.log(bmw);
//console.log(yeraz);

//console.log("------------");

//let bmw1 = makeCar("white", "x6", "bmw-1", function (speed) {
//  this.speed = speed + 10;
//});
//bmw1.go(24);
//console.log(bmw1);

// ----------Day 2 -----------

//function fn() {
//  console.log(this.asd);
//}

//const fnArr = () => {
//  console.log(this.asd);
//};

//let o1 = {
//  asd: "o1 name",
//  fn,
//  fnArr,
//  sayYourNameNest() {
//    console.log(this.asd);
//    const nestFn = () => {
//      console.log(this.asd); // this = window
//    };
//    nestFn();
//  },
//};

//let o2 = {
//  asd: "o2 name",
//  fn,
//  fnArr,
//};

//o1.fnArr(); // undifinde

//o2.fn();

//console.log(this.asd);
////window.asd = 46545;
////console.log(o1.fnArr()); // 46545

//o1.sayYourNameNest();

//function fn() {
//  console.log(this);

//  function fnNest() {
//    console.log(this);

//    function fnNestNest() {
//      console.log(this);
//    }
//    fnNestNest();
//  }

//  fnNest();
//}

//let obj = {
//  asd: "asd",
//  a: fn,
//};

//obj.a();

//fn();

// -------------------

//let str = "Hello my Java, my Script.";

//console.log(str.charCodeAt(3));
//console.log(str.includes("my"));
//console.log(str.indexOf("my")); //6
//console.log(str.lastIndexOf("my")); // 14

//console.log(str.substring(3, 15));

//// array methods

//let arr = [1, 2, 3];
//let arr1 = [4, 5, 6];
//let arr2 = [7, 8, 9];

//console.log(arr.concat(arr1));
//console.log(arr2.concat(arr1, arr));
//console.log(
//  arr.concat(
//    9,
//    9,
//    9,
//    [
//      [8, 8, 8],
//      [8, 8, 8],
//      [8, 8, 8],
//    ],
//    arr1,
//    "*",
//    arr
//  )
//);

//const array1 = ["a", "b", "c", "d", "e"];

//console.log(array1.copyWithin(0, 1, 3));

//let array2 = "dfg";

//let array22 = array2.split("");
//console.log(array22);
//console.log(array22.copyWithin(0, 1, 0));

//let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(a);
////console.log(a.copyWithin(0, 1, 5));

//console.log(a.join(", ").split(","));

//console.log(a.slice(0, 3));

//a.splice(3, 4, 9, 9);

//console.log(a);
//a.splice(3, 1, 3);
//console.log(a);

//function delEl(arr, e) {
//  let newArr = arr.slice();
//  const i = newArr.indexOf(e);
//  if (i !== -1) {
//    newArr.splice(i, 1);
//  } else {
//    newArr.push(e);
//  }
//  return newArr;
//}

//console.log(delEl([0, 1, 2, 3], 2));
//-----------------

//function getMapEl(e) {
//  return e * 3;
//}

//function map(arr, e) {
//  let newArr = [];

//  for (let i = 0; i < arr.length; i++) {
//    const next = getMapEl(arr[i]);
//    newArr.push(next);
//  }

//  return newArr;
//}

//let newArr = [2, 3, 4];

//let frequency = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

//function freqEl(arr) {
//  let result = [];
//  let count = 0;
//  for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length; j++) {
//      if (arr[i] === arr[j]) {
//        result.push(arr[j]);
//        count++;
//      }
//    }
//  }
//  //console.log(count);
//  return result;
//}
////debugger;
//console.log(freqEl(frequency));

//let str1 = "123456789";

//function miban(string) {
//  let result = [];

//  for (let i = 0; i < string.length; i++) {
//    result = result + string.substring(i + 1, i + 2) + string.charAt(i);
//  }
//  return result;
//}

//console.log(miban(str1));
//console.log("--------------");

//let arrA = [1, 1, 2, 2, 3];
//console.log(arrA);

//function getArr(arr) {
//  let result = [];

//  for (let i = 0; i < arr.length; i++) {
//    let count = 1;
//    let arr2 = [];
//    let isTrue = true;

//    for (let j = 0; j < result.length; j++) {
//      if (result[j][0] === arr[i]) {
//        isTrue = false;
//        arr2.push(arr[i]);
//        console.log(arr2);
//      }
//    }

//    //return result;
//  }
//}
////debugger;

//console.log(getArr(arrA));

//function uniqElem(arr) {
//  let result = {};

//  for (let i = 0; i < arr.length; i++) {
//    if (!result[arr[i]]) {
//      result[arr[i]] = 0;
//    } else {
//      result[arr[i]];
//    }
//  }
//  return result;
//}

////debugger;
//console.log(uniqElem(arrA));

////--------------

//function newArray(arr) {
//  let result = [];

//  for (let i = 0; i < arr.length; i) {
//    let num = 0;
//    let arr2 = [];
//    let isTrue = false;

//    for (let j = 0; j < result.length; j++) {
//      if (result[j][0] === arr[i]) {
//        isTrue = true;
//        break;
//      }
//    }
//    if (!isTrue) {
//      for (let j = i + 1; j < arr.length + 1; j++) {
//        if (arr[i] === arr[j]) {
//          num++;
//        }
//      }
//      arr2.push(arr[i]);
//      arr2.push(num);
//      result.push(arr2);
//    }

//    arr.shift(arr[0]);
//  }
//  return result;
//}

//console.log(newArray(arrA));

//function cutNum(n) {
//  let a = 0;

//  for (let i = 0; i < n.length; i++) {
//    a = a + +n[i];
//    console.log(a);
//  }
//  return a;
//}

//function fn(num) {
//  let res = 0;
//  let result = 0;
//  num = num.toString();
//  debugger;

//  for (let i = 0; i < num.length; i++) {
//    if (res < 9) {
//      res += +num[i];
//    } else {
//      result += cutNum(res);
//    }
//  }
//}

//console.log(fn(num));


