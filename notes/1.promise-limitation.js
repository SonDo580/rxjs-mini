// - A Promise represents the eventual result (success/failure)
//   of an asynchronous operation
// - Use cases: API calls, file reading,...
// - States: pending / fulfilled / rejected

function timeout(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data"); // only the first resolve works
      resolve("data2"); // ignored
    }, milliseconds);
  });
}

const promise1 = timeout(1000);
promise1.then((data) => {
  console.log(data);
});

function interval(milliseconds) {
  let i = 0;
  return new Promise((resolve) => {
    setInterval(() => {
      resolve(`data-${i}`); // Resolves once, then hangs
      i++;
    }, milliseconds);
  });
}

const promise2 = interval(1000);
promise2.then((data) => {
  console.log(data);
});

// Limitation:
// - A Promise can only resolve once
// -> cannot emit multiple values
