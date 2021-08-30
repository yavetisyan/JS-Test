
let s = new Set()

// add

s.add(6)
console.log(s);
s.add(7)
console.log(s);
s.add(7)
console.log(s);

// has
console.log(s.has(7));   // true or false 

// delete

s.delete(6)
console.log(s);

// clear
s.clear()
console.log(s);

let obj ={
	asd:'asd'
}

s.add(obj)
s.add(7)
s.add(true);
s.add(NaN)
console.log(s);


//  keys
console.log(s.keys()); // iterable 
// values 
console.log(s.values()); // iterable 


let keys = Array.from(s.keys())
console.log(keys);


let values = Array.from(s.values())
console.log(values);

let entries = Array.from(s.entries())
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

m.set(123,777)
m.set('123',888)
console.log(Object.fromEntries(m.entries()));