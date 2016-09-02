// Implement the function asyncMap:

// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.

// The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

// The order of these results should be the same as the order of the tasks.
// It is important to note that this is not the order in which the tasks return,
// but the order in which they are passed to asyncMap.

// Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
// on the results array.

// promises solution
const asyncMap = (tasks, callback) => ( 
	Promise.all( tasks.map( task => ( 
		new Promise ( resolve => task(resolve) ) 
	)))
	.then( results => callback(results)) 
);

// iterator solution
// var asyncMap = function(tasks, callback){
//   var results = [], count = 0;
//   tasks.forEach(function(task, i){
//     task(function(value){
//       results[i] = value;
//       if(++count == tasks.length){
//         callback(results);
//       }
//     })
//   })
// };  
