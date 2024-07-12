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

