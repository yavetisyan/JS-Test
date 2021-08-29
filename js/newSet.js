
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