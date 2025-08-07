// let arr = {name:"adi",total:0};
// let arr2 = arr;
// arr2.total = 10;
// arr2 is a reference to arr, so changes to arr2 will affect arr
// console.log(arr.total); // 10
// console.log(arr2.total); // 10
// console.log(arr);// { name: 'adi', total: 10 }
// console.log(arr2);// { name: 'adi', total: 10 }

/**---------- */
// let arr = {name:"adi",total:0};
// let arr2 = {...arr};
// arr2.total = 10;

// //  arr2 is a copy of arr, so changes to arr2 will not affect arr
// console.log(arr.total); // 0
// console.log(arr2.total); // 10
// console.log(arr); // { name: 'adi', total: 0 }
// console.log(arr2); // { name: 'adi', total: 10 }

// /**----------- */
// let arr = {name:"adi",total:0,balls:{type:"leather"}};
// let arr2 = {...arr};
// arr2.balls.type = "synthetic";

// console.log(arr.balls.type); // "synthetic"
// console.log(arr);// { name: 'adi', total: 0, balls: { type: 'synthetic' } }
// console.log(arr2);  // { name: 'adi', total: 0, balls: { type: 'synthetic' } }
// // arr2 is a shallow copy of arr, so changes to nested objects will affect both
// // arr and arr2. To create a deep copy, you would need to use a method like JSON.parse(JSON.stringify(arr)) or a library like Lodash.
// //// This is because the `balls` object is still a reference to the same object in memory.

// /**------------ */
// let arr = {name:"adi",total:0,balls:{type:"leather"}};
// let arr2 = deepCopy(arr); // Assuming deepCopy is a function that creates a deep copy of an object
// arr2.balls.type = "synthetic";

// console.log(arr);
// console.log(arr2);

// function deepCopy(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }
// This function creates a deep copy of the object by converting it to a JSON string and then parsing it back into an object.
// This way, changes to nested objects in the copied object do not affect the original object.
// Note: This method has limitations, such as not being able to copy functions or special object types like Date or RegExp.
// For those cases, you would need a more sophisticated deep copy function or library.
// Example usage of deep copy
// let original = { a: 1, b: { c: 2 } };
// let copy = deepCopy(original);
// copy.b.c = 3;
// console.log(original.b.c); // 2
// console.log(copy.b.c); // 3
// In this example, modifying the nested object in the copied object does not affect the original object.
// This is because the deepCopy function creates a new object with its own copy of the nested objects, rather than just copying references.
// This ensures that changes to the copied object do not affect the original object, and vice versa.
// This is a common pattern in JavaScript to ensure that objects can be manipulated independently without unintended side effects.
// Note: The deepCopy function provided here is a simple implementation and may not handle all edge cases.
// For more complex objects, consider using libraries like Lodash or writing a more robust deep copy function.
// Example usage of deep copy
// let original = { a: 1, b: { c: 2 } };
// let copy = deepCopy(original);
// copy.b.c = 3;
// console.log(original.b.c); // 2
// console.log(copy.b.c); // 3
// In this example, modifying the nested object in the copied object does not affect the original object.
// This is because the deepCopy function creates a new object with its own copy of the nested objects, rather than just copying references.
// This ensures that changes to the copied object do not affect the original object, and vice versa.
// This is a common pattern in JavaScript to ensure that objects can be manipulated independently without unintended side effects.


/**--------- */

// var myObj = {
//     foo: "bar",
//     func: function() {
//         var self = this; // Save reference to the outer this
//         console.log("outer func:", this.foo); // "bar"
//         console.log("outer func:", self.foo); // "bar"
//         (function() {
//             console.log("inner func: this.foo = ", this.foo); // undefined (or "bar" if using arrow function)
//             console.log("inner func: self.foo = ", self.foo); // "bar"
//         }());
        
//     }
// };
// myObj.func();
// This is a classic workaround to access the correct this inside a nested function — before arrow functions existed.
// if (true) {
//     var x = 10;
//     let y = 20;
//   }
//   console.log(x); // ?
//   console.log(y); // ?

// "Adi".toUpperCase();    // ✅ Method of String object
// [1, 2, 3].push(4);      // ✅ Method of Array object
// Math.random();          // ✅ Method of Math object

// (function () {
//     var secret = "hidden";
//     console.log(secret); // ✅
//   })();
//   console.log(secret); // ❌ ReferenceError
//  let obj = {
//     name: "adi",
//     total: 0,
//     balls: {
//         type: "leather"
//     }
//  }
/**----------------- */
//   if ([]==true) {
//     console.log("adi present");
// } else {
//     console.log("adi absent");
// }
/**------------------- */
let obj ={
    a: {
        b: undefined
    }
}

console.log(obj.a?.b?.c?.d??"adi");
  
