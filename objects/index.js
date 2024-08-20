// objects are collections of key value pairs,
// 



// const circle = {
//     radius:1,
//     location: {
//          x:1,
//          y:1
//      },
//     isVisible: true,
//     draw: function(){ //if a function is part of an object, it is called a method
//         console.log('draw'); 
//     }
    

// };


// circle.draw();


// Factory Funcions

// let's create 2 circle objects

// what if we had more methods thatn just draw ? 

// const circle1 = {
//     radius:1,
//     location: {
//          x:1,
//          y:1
//      },
//     isVisible: true,
//     draw: function(){ //if a function is part of an object, it is called a method
//         console.log('draw'); 
//     }
    

// };

// factory funcion produce objects

// function createCircle(radius,){

//     return {
//         radius, // if key and value are the same we can remove the value to make it shorter

//         draw(){ 
//             console.log('draw');
        
         
        
        
//         }
        
    
//     };

// }

// const circle1 = createCircle(1);
// console.log(circle1)
// const circle2 = createCircle(2);
// console.log(circle2)
    

// let a = 'red'
// let b = 'blue'

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

// If else statements

// let hour =7;
// if (hour>=6 && hour <12) {
//     console.log('Good morning');
//     document.write('Good morning')

// }
// else if (hour >=12 && hour < 18){
//     console.log('Good Afternoon')
// }
// else
//     console.log('Good evening'); 

// Switch case

// let role='jim';

// switch (role){   // we add a variable instead of condition
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;

//     default:
//         console.log('Unknown User');


// }

// for (let i = 0; i <5; i++) {
//     // console.log('Hello World', i);
//     if (i % 2 != 0) console.log(i)

// }

// let i = 0;

// while( i <=5){
//     if (i % 2 !== 0) console.log(i)
//     i++;
// }

// do-while

// let i = 0;
// do {
//     if (i %2 !== 0)console.log(i);
//     i++; 
        
    
// } while (i <=5); 

// for in loop to iterate through properties of an object or elements in an array

// const person = {
//     name: "mosh",
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);

// const colors = ['red','blue','green']

// for (let index in colors)
//     console.log(index,colors[index]);

// for-of loop is an ideal way of iterating through arrays

// for(let color of colors)
//     console.log(color) // it would give the values of the index directly


// with break key word you jump out of the loop
// with continue you just go to the next iteration

// let i = 0;
// while (i <=10){
//     if (i ==5) break; 
//     if (i %2===0)  {
//         i++;
//         continue;
//     }

//     console.log(i);
//     i++;

// }

// write a function that takes two numbers and returns the maximum of the two

// (condition) ? a : b if the condition is true we use the one value or else we use the other value

// function maxNum(a,b){
//     // a =3
//     // b = 4
//     // let max = 0;

//     // if(a>b) max = a
//     // e
//     // console.log(max)

//     return (a >b) ? a:b;

// }

// let number = maxNum(3,6);
// console.log(number)


// detect if an image is landscape or portrait

// function isLandscape(width, height){
//     return width > height ? 'landscape' : 'portrait';
// }

// let img = isLandscape(60, 30);
// console.log(img);  // Output: 'landscape'

// FizzBuzz algorithm we give it an input and it returns a string

// divisible by 3 == Fizz
// divisible by 5 == buzz
// number divisible by 3 and 5 == fizzbuzz
// not divisible we get the same number
// if we do not pass a number we get == 'not a number'


// function fizzBuzz(input) {
//     if (typeof input !== 'number') return 'not a number';
//     if (input % 3 === 0 && input % 5 === 0) return 'fizzbuzz';
//     if (input % 3 === 0) return 'fizz';
//     if (input % 5 === 0) return 'buzz';
//     return input;
// }

// const output = fizzBuzz('jim');
// console.log(output);  // Output: 'fizz'

// speed limit = 70
// for every 5 kmh more than 70 will get 1 demerit point
// will use math.floor
// more than 12 points == license suspended

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerDemeritPoint = 5;

//     if (speed <=speedLimit) return 'ok';

//     // calculating demerit points

//     const demeritPoints = Math.floor((speed-speedLimit)/kmPerDemeritPoint);

//     if (demeritPoints >=12) return 'Licence suspended'

//     return `Total demerit Point: ${demeritPoints}`;

// }

// const check = checkSpeed(100);
// console.log(check) // output : license suspended

// showNumbers(10);

// function showNumbers(limit){

//     for(let i = 0; i<=limit; i++) {
//         // if(i%2 ===0 ) console.log(i, 'Even');
//         // else console.log(i,'odd')
//     // } or we can write it like this

//     const message = ( i%2=== 0) ? 'Even' : 'Odd'
//     console.log(i, message)
//     }

// }

//TRUTHY OR FALSY

// const name = 'Mosh'

// if (name) console.log('');

// const array = [0,null,NaN,undefined,1,2,3]

// console.log(countTruthy(array))


// function countTruthy(array) {

//     let count = 0;
//     for(let value of array)
//         if(value)
//             count++
//     return count;


// } //output : 3 because it only counts the positive values

//object

// let person={
//     name: 'Mosh',
//     age: 30
// }
// //Dot notation
// // person.name = 'jim'
// //bracket notation
// person['name'] = 'jim'; 

// console.log(person)

// ARRAY is an object too
// let selectedColors = ['red','blue']
// selectedColors[2] = 1; //size of array and objects in the array are dynamic
// console.log(selectedColors);


// function greet(name) {
//     console.log('Hello World', name);

// }

// greet('john');

// sum of multiples 3 and 5

// console.log(sum(10));

// function sum(limit){
//     let result = 0;

//     for (let i = 0; i <=limit;i++){
//         if (i%3===0 || i%5===0) 
//             result+=i;
//     }
    

//     return result
        

    
// }
// GRADE

// avg 1-59 : F
//60-69 : D
//70-79: C
//80-89: B
//90-100: A

// const marks = [80,80,50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//     let sum = 0;

//     for (let mark of marks)
//         sum += mark 

//     let avg = sum / marks.length;

//     if (avg < 60) return 'F';
//     if (avg < 70) return 'D';
//     if (avg < 80) return 'C';




//     }

// showStars(5);

// function showStars(rows){

//     for (let i = 0; i<=rows;i++){
//         let pattern = '';

//         for (let j = 0; j<=i; j++)
//             pattern += '*';
//         console.log(pattern)
    

//     }

// }
//====================================================

// Prime Number

// showPrimes(20);

// function showPrimes(limit){

//     for (let number =2; number<= limit; number++) {
        
//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++ ){
//             if (number% factor === 0){
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(number);  
//     }



// }

// ===============================================================

// OBJECTS - CHAPTER


// let radius =1;
// let x =1;
// let y =1;

// now instead of writing them separately we can just add all these related variables in an object

// object oriented programming OOP is where

// const circle = {
//     radius:1,
//     loaction: {
//         x:1,
//         y:1
//     },
//     isVisible: true, // value can be anything even a function 
//     draw: function() {
//         console.log('draw','it is working'); // if a function is part of an object. we call it a method

//     }
//     };

// circle.draw() //Method
// =============================

// Factory Functions 

// what if I want to draw 2 circle or more objects ?

// factory function produce objects

// function createCircle(radius){
//     return  {
//             radius:radius,
            
// //             // draw: function() {
// //             //     console.log('draw','it is working'); 
                
// //             // }
// //             // we can write the above draw function like this

//             draw(){
//                 console.log('hey hey');
                

//             }
//             };

// }
// const myCircle = createCircle(1);

// const circle1 = createCircle(1);
// console.log(circle1)
// circle1.draw()

// const circle2 = createCircle(2);

// console.log(2)

// ====================================================
// constructor Functions
// in constructor function instead of writing return, we use this keyword and use new keyword to refer to the object
// the job of this function is to construct or create an object
// user Pascal Notation: OneTwo

// function Circle(radius){
//     this.radius = radius; // this is a keyword 
//     this.draw = function() {
//         console.log('const function is working');
//     }

// }
// const circle = new Circle(1); // new operator first creates an empty object, it will set this to point to this object


// console.log(circle.draw())



// primitives vs Reference Types

//  when we use an object, that object is not stoed in the variable, that object is stored somewhere else in the memory and address of that memory location is stored inside the variable
//primitives are copied by their value
// objects / reference types are copied by their reference


// let x = {value: 10};
// let y = x;

// x.value =20;
// let number = 10
// function increase(number){
    
//     number++; // here it will be 11 but after the function it will go out of the scope
// }

// increase(number); 
// console.log(number) // output 10 because primitives right?

// now let's see 

// let obj ={value:10};


// function increase(obj){
//     obj.value++;
// }
// increase(obj);
// console.log(obj); //11  the reason is in the function it is refereing to the address of the object and outside too

// for-in and for-of loops to iterate

// const circle = {
//     radius:1,
//     draw(){
//         console.log('draw');
//     }
//     };

//     for (let key in circle) // getting the keys from the object
//         console.log(key, circle[key]); // to get the value too along with the key we need to use bracket notation

//     for (let key of circle)
//         console.log(key) //we get an error
// // BECAUSE FOR OF IS ONLY ITERABLE FOR ARRAYS AND MAPS
// // AN OBJECT IS NOT ITERABLE WITH FOR OF LOOP

// // however, THE METHOD Object.keys(circle) returns an array

// for (let entry of Object.entries(circle))
//     console.log(entry) // returns key value pair

//cloning an object
const circle = {
    radius:1,
    draw(){
        console.log('draw');
    }
};
    
// to create another object copy of this circle

// const another = {};

// for (let key in circle)
//     another[key] = circle[key]; // takes the key of circle

// ANOTHER APPROACH TO CLONE OR COPY AN OBJECT

// const another= Object.assign({color:'yellow'},circle); // this too works

// const another = {...circle}; // the simplest way to clone an object

// console.log('the copied object is',another);

// built in Math object

// console.log((Math.round(Math.random()*10)))


// const dictionary = [
//     {word: "cloudlet", definition:"A small cloud"},
//     {word: "harbinger", definition: "A sign of what is to come"},
//     {word:"paean", definition: "A song of praise"},
//     {word: "eddy", definition:" To whirl in circles on the wind"}
// ]; 

// =================================
// challenge 1
// street
// city
//zipCode
// create a function that takes all the properties of the object 

// const address = {
//     Street:"Azimpur",
//     City:"Dhaka",
//     ZipCode:1205,
    
// };

// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key])
// }

// showAddress(address);

// factory function and constructor function to initialize and address object

// factory function

// let address = createAddress('a','b','c');
// console.log(address);

// function createAddress(street,city,zipCode) {
//     return {
//         street,
//         city,
//         zipCode
//     };


// }

// constructor function
let address = new Address('a','b','c');
console.log(address)
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

}