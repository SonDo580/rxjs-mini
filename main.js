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

// Observer:
// - Pass an Observer when calling 'subscribe'
// - Observer is an object that handle emitted values from the Observable
// - 3 methods: next, complete, error

// Timeout Observable
const timeoutObservable$ = Observable.timeout(1000);

const timeoutObserver = {
  next: (data) => {
    console.log("hello from timeout observable");
  },
  complete: () => {
    console.log("timeout observable completed");
  },
  error: () => {},
};

timeoutObservable$.subscribe(timeoutObserver);

// Interval Observable
const intervalObservable$ = Observable.interval(1000);

const intervalObserver = {
  next: (data) => {
    console.log("hello from interval observable");
  },
  complete: () => {}, // the interval observable will not complete
  error: () => {},
};

const intervalSubscription = intervalObservable$.subscribe(intervalObserver);

setTimeout(() => {
  intervalSubscription.unsubscribe();
}, 10000);
