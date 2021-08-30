let s = new Set();

// add

s.add(6);
console.log(s);
s.add(7);
console.log(s);
s.add(7);
console.log(s);

// has
console.log(s.has(7)); // true or false

// delete

s.delete(6);
console.log(s);

// clear
s.clear();
console.log(s);

let obj = {
  asd: "asd",
};

s.add(obj);
s.add(7);
s.add(true);
s.add(NaN);
console.log(s);

//  keys
console.log(s.keys()); // iterable
// values
console.log(s.values()); // iterable

let keys = Array.from(s.keys());
console.log(keys);

let values = Array.from(s.values());
console.log(values);

let entries = Array.from(s.entries());
console.log(entries);

//

let obj = {
  key: "value",
  asd: "asd",
  dsa: 132,
  qwe: "asqqs",
};

let m1 = new Map([
  [1, "132"],
  ["asdf", false],
  [obj, [1, 2, 3, 4]],
  [{}, {}],
]);

console.log(m1);

let m2 = new Map(m1.entries());

console.log(m2);
console.log(m1.get(obj) === m2.get(obj)); // true

// -------------------

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

o = {
  key: "value",
  asd: "asd",
  dsa: 132,
  qwe: "asqqs",
};

let m = new Map(Object.entries(o));

console.log(m);

console.log(
  Object.fromEntries([
    ["key", "value"],
    ["asd", "asd"],
    ["dsa", 132],
    ["qwe", "asqqs"],
  ])
);

m.set(o, 123);
console.log(m);
m.set(obj, 365);
console.log(m);

console.log(Object.fromEntries(m.entries()));

m.set(123, 777);
m.set("123", 888);
console.log(Object.fromEntries(m.entries()));

//------------------

//  дестракчеринг

//let o = {
//  key: "value",
//  asd: "asd",
//  dsa: 132,
//  qwe: "asqqs",
//};

////const asd = o.asd
////const dsa = o.dsa
////const qwe = o.qwe
////console.log(qwe);

//const { asd, dsa, qwe } = o;

////console.log({ asd, dsa, qwe });
////console.log(asd);
////console.log(dsa);
////console.log(qwe);

////let obj = {
////  key: "value",
////  asd: "asd",
////  dsa: 132,
////  qwe: "asqqs",
////	cxz:true,
////	aaa: 333
////};

////const { asd: aaa, dsa:ddd, cxz, aaa:bbb } = obj;
////console.log(aaa);
////console.log(ddd);
////console.log(cxz);
////console.log(bbb);

//const objAsd =  obj.asd !== undefined ? obj.asd : 999

//console.log(objAsd);

////const {cxz =999, qwe1 = 888} = obj
////console.log(cxz); // true
////console.log(qwe1); // 888

//const {bv:cc = 888} = obj
//console.log(cc); // true

// ---------------

//let obj = {
//	asd:132,
//	o:{
//		dsa:'ds-a'
//	}
//}

// // const dsa = obj.o.dsa
// const {o:{dsaa:bb = 777}} = obj // if undefined

// console.log(bb); //  777

//let o = {
//  asd: "asd-string",
//};
//let obj = {
//  dsa: "dsa-string",
//};

//let { asd } = o;

//console.log(asd); // asd-string
//({ asd } = obj)
//console.log(asd); // undefined

//({dsa:asd} = obj)

//console.log(asd); // dsa-string
//console.log(obj);

//({dsa:o.asd} = obj)

//console.log(o);
//console.log(obj);

// array destakcher

let arr = [1, 2, 3, 4]; // iterable array

//const asd = arr[0]
//const dsa = arr[1]

let [asd, dsa] = arr;

console.log(asd, dsa); // asd = 1, dsa = 2

let [a, b, c, d, e, f = "asd", g, h = "dsa"] = arr;

console.log("a " + a);
console.log("b " + b);
console.log("c " + c);
console.log("d " + d);
console.log("e " + e);
console.log("f " + f);
console.log("g " + g);
console.log("h " + h);

let m = new Map([
  ["asd", "dsa"],
  [asd, "asd"],
  [222, "asdasdasdas"],
  [true, null],
]);

console.log(m);

let [i, j, k, l] = m.keys();

console.log("i " + i);
console.log("j " + j);
console.log("k " + k);
console.log("l " + l);
console.log("------------");

let [r, n, o, p, q] = m.entries();

console.log("r  " + r);
console.log("n " + n);
console.log("o " + o);
console.log("p " + p);
console.log("q " + q);

a = 5;
b = 6;
[b, a] = [a, b];
console.log("a = " + a);
console.log("b = " + b);

arr = [1, 2, 3, 4];

[a, b, ...mnacac] = arr;

console.log(mnacac);
[c, d, e, f, g, h, ...mnacac] = arr;
console.log(mnacac); // [] empty
