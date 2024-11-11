function Observable(subscribe) {
  this.subscribe = subscribe;
}

function Subscription(unsubscribe) {
  this.unsubscribe = unsubscribe;
}

Observable.timeout = function (milliseconds) {
  function subscribe(observer) {
    const timeoutId = setTimeout(() => {
      observer.next();
      observer.complete();
    }, milliseconds);

    const unsubscribe = () => {
      clearTimeout(timeoutId);
    };

    return new Subscription(unsubscribe);
  }

  return new Observable(subscribe);
};

Observable.interval = function (milliseconds) {
  function subscribe(observer) {
    const intervalId = setInterval(() => {
      observer.next();
    }, milliseconds);

    const unsubscribe = () => {
      clearInterval(intervalId);
      console.log("interval observable unsubscribed");
    };

    return new Subscription(unsubscribe);
  }

  return new Observable(subscribe);
};
