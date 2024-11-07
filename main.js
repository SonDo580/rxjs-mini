// Promise is eager
// The execution function start running immediately

Promise.timeout = function (milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

Promise.timeout(1000).then((data) => {
  console.log(data);
});

// ==========

// Observable is lazy
// - The input function is executed when calling the 'subscribe' method
// - 'subscribe' receives a 'next' function to handle emitted value

function Observable(funcToRun) {
  this.subscribe = funcToRun;
}

Observable.timeout = function (milliseconds) {
  function funcToRun(next) {
    setTimeout(() => {
      next();
    }, milliseconds);
  }

  return new Observable(funcToRun);
};

Observable.timeout(1000).subscribe(() => {
  console.log("hello");
});
