// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received from user: ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
  console.log(`some other logic here`);
})

customEmitter.emit('response' , 'John', 32)

// The on event method and the emitt event need to have the same method
// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it
