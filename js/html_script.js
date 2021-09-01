let div =document.getElementsByTagName('div');
console.log(div);

//let name= document.getElementsByName('email')
//console.log(name);

//let id = document.getElementById('div5')

//console.log(id);
 
//let clas= document.getElementsByClassName('asd')
//console.log(clas);

//let query = document.querySelector('div')
//console.log(query);

//let queryAll = document.querySelectorAll('div')
//console.log(queryAll);

//let queryClass = document.querySelectorAll('.asd')
//console.log(queryClass);

//let attr = document.querySelectorAll('[attr1]')
//console.log(attr);


//let name1 = document.getElementsByName('checkbox');
//console.log(name1);

let id = document.getElementById('div5');
console.log(id);

id.style.backgroundColor = 'red';

let a = document.querySelector('div');

console.log(a);




a.onclick(function(){


	if(this.style.backgroundColor === 'none'){
		this.style.backgroundColor = 'aqua';
	} 
	

})