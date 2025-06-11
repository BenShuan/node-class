function asyncTask(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolved: ${value}`);
      resolve(value + 1);
    }, delay);
  });
}
function anotherAsyncTask(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolved: ${value}`);
      resolve(value + 1);
    }, delay);
  });
}

// Cascading promises
asyncTask(1, 500)
  .then(result => anotherAsyncTask(result, 500))
  .then(result => anotherAsyncTask(result, 500))
  .then(result => anotherAsyncTask(result, 500))
  .then(result => {
    console.log(`Final result: ${result}`);
  })
  .catch(err => {
    console.error('Error:', err);
  }).finally(() => {
  console.log('All promises have been resolved or rejected.');})

  console.log('Some thing else is happening while promises are resolving...');

  