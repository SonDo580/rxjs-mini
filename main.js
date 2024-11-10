// Note: Observable is defined in observable.js

// Promise is eager
// The execution function start running immediately

Promise.timeout = function (milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

Promise.timeout(1000).then(() => {
  console.log("hello from promise");
});

// ==========

// Observable is lazy
// - The input function is executed when calling the 'subscribe' method
// - 'subscribe' receives a 'next' function to handle emitted value

const timeoutObservable$ = Observable.timeout(1000);
timeoutObservable$.subscribe(() => {
  console.log("hello from timeout observable");
});

const intervalObservable$ = Observable.interval(1000);
const intervalSubscription = intervalObservable$.subscribe(() => {
  console.log("hello from interval observable");
});

// Unsubscribe
setTimeout(() => {
  intervalSubscription.unsubscribe()
}, 10000)