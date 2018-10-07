//


// In the browser internal consist its id(nubmer), but in nodejs there's
// a whole object with methods
const interval = setInterval(() => {
  console.log('Feels good man!');
}, 300);

// Method 'unref' unlinked the setInterval event from its main flow?
// could be useful to unlink any events when needed, but not stopping the whole programm
// basically it stops all the setIntervals for execution?
interval.unref();

let times = 0;
const interval2 = setInterval(() => {
  times++
  console.log('The interval #2');
  if (times > 4) { clearInterval(interval2); }
}, 1000);