// A small promise API exercise to learn the basics

/*
*   Example one
*/

let incrementer = 1

function increment() {
  incrementer += 1
  return new Promise(function(resolve, reject) {
    if (incrementer % 2 === 0) {
      resolve("even")
    }
    if (incrementer % 2 !== 0) {
      reject("odd")
    }
  })
}

// To run in the console

// 1: increment runs once, incrementer === 2, => "incrementer is currently even"

increment().then(function(status) {
  console.log(`incrementer is currently ${status}`);
}, function(status) {
  console.log(`incrementer is currently ${status}`);
})

// 2: increment runs again, incrementer === 3, => "incrementer is currently odd"

increment().then(function(status) {
  console.log(`incrementer is currently ${status}`);
}, function(status) {
  console.log(`incrementer is currently ${status}`);
})


/*
*   Example 2, chaining .then() statements
*/

let incrementer = 0

function increment(val) {
  incrementer += val
  return new Promise(function(resolve, reject) {
    resolve(incrementer)
  })
}


increment(1).then(function(incrementerValue){
  console.log(`incrementer is currently ${incrementerValue}`);
  incrementer += 1
}).then(function(incrementerValue) {
  console.log(`incrementer is currently ${incrementerValue}`);
})
