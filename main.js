console.log('Hello World!');
var persons=['Joy', 'Dan','Ben'];
/*This is done to return the first value of the array*/function myFunc(){document.getElementbyId('alt'). innerHTML=persons[0];} 
console.log(persons[0]);
/* the push element adds some items*/
var cities=['gen','can','dres'];
cities.push('Rio', 'Fors');
function byFunc(){document.getElementbyId('wak'). innerHTML=cities;} 
console.log(cities);
/*unshift()adds one or more items to the front of an array. 
pop() removes an element fron the end of an array. 
shift()removes tye first element of an array. 
cities.length returns the number of elements.*/
var planets=['sun','moon', 'earth'];
var lastItem=planets[planets. length-1];
function select(){document.getElementbyId('plan'). innerHTML=lastItem;} 
console.log(lastItem);
/*how to determine the type of array : var cities=['den', 'fer'];
var type=typeof cities;
this code returns object*/