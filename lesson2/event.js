//


const EventEmitter = require('events').EventEmitter;


class Kettle extends EventEmitter {
   // Creating a constructor just to make an event that executes faster than on could handle.
  constructor() {
    super();
    process.nextTick(() =>{
      this.emit('SwitchON')
    });
  }
  start() {
    setTimeout(() => {
      this.emit('ready', { a: 'water', b: 'boiled'});
    }, 1000)
  }
}


const ketty = new Kettle();
ketty.start()

ketty.on('ready', (event) => {
  console.log(`The kettle is ready: ${event.a} ${event.b}`);
});

ketty.on('SwitchON', () => {
  console.log('The kettle has been Switched on.')
});