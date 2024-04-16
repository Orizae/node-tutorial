// started operating system process
console.log('first')
// setTimeout is asynchronous, that's why called last
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
