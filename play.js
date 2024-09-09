'use strict';

const fetchData = () => {
  // built in function that simulates a promise
  // takes resolve and reject as arguments
  // reject is like throwing an error
  // resolve is like returning a value
  // then it takes a function that will be executed when the promise is done
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!!');
    }, 1500);
  });
  // we have to return the promise so that we can use it outside of the function
  return promise;
};
// It is async code because it doesn't finish immediately
setTimeout(() => {
  console.log('Timer is done!');
  // Second timer starts after first finishes
  fetchData()
    .then(text => {
      console.log(text);

      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);
// Sync code because it executes immediately
console.log('Hello!');
console.log('Hi!');
