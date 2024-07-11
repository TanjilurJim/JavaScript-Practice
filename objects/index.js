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

const colors = ['red','blue','green']

// for (let index in colors)
//     console.log(index,colors[index]);

// for-of loop is an ideal way of iterating through arrays

for(let color of colors)
    console.log(color) // it would give the values of the index directly

