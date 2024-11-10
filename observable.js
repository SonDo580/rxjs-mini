function Observable(funcToRun) {
  this.subscribe = funcToRun;
}

function Subscription(unsubscribe) {
  this.unsubscribe = unsubscribe;
}

Observable.timeout = function (milliseconds) {
  function funcToRun(next) {
    const timeoutId = setTimeout(() => {
      next();
    }, milliseconds);

    const unsubscribe = () => {
      clearTimeout(timeoutId);
    };

    return new Subscription(unsubscribe);
  }

  return new Observable(funcToRun);
};

Observable.interval = function (milliseconds) {
  function funcToRun(next) {
    const intervalId = setInterval(() => {
      next();
    }, milliseconds);

    const unsubscribe = () => {
      clearInterval(intervalId);
      console.log("interval observable unsubscribed");
    };

    return new Subscription(unsubscribe);
  }

  return new Observable(funcToRun);
};
