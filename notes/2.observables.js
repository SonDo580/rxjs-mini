// Observable:
// - Not native in JavaScript
// - Represents a stream of multiple future values (events)
// - Standardizes Producer-Consumer model with a unified API

// States:
// - success (multiple times)
// - error
// - complete 

// Producer-Consumer model:
// - Producer: emit events
// - Consumer: subscribe and respond to events, unsubscribe

// Producer-Consumer model example:
function next(event) {
  console.log(event);
}

const timeoutId = setTimeout(next, 1000);
clearTimeout(timeoutId)

document.addEventListener("mousemove", next);
document.removeEventListener("mousemove", next);
