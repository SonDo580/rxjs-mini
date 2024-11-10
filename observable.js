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

Observable.interval = function (milliseconds) {
  function funcToRun(next) {
    setInterval(() => {
      next();
    }, milliseconds);
  }

  return new Observable(funcToRun);
};
