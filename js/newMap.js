let m = new Map();

m.set("key", "value");
//console.log(m);

m.set(123, "qwe");
//console.log(m);

m.set(true, "true");
//console.log(m);

m.set(NaN, null);
//console.log(m);

m.set({ asd: "asd" }, "miban");
//console.log(m);

console.log(m.size); // Map size

// get

console.log(m.get("key"));
console.log(m.get(true));

let obj = {
  asd: "asd",
};

m.set(obj, 1234);
console.log(m);

console.log(m.get(obj));
console.log(m.get(NaN));
m.set(NaN, undefined);

console.log(m.get(NaN));

// keys

console.log(m.keys()); // iterator Map

let aa = Array.from(m.keys());
console.log(aa);

for (let key of m.keys()) {
  console.log(key);
}

// values

console.log(m.values());

// entries

console.log(m.entries());

let bb = Array.from(m.entries());
console.log(bb);

// has
console.log(m.has(NaN)); // true or false
// clear
m.clear();
console.log(m);

//  ----------
