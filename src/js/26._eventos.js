/* */

console.log('Task 1') // task tipo javascript

console.log('Task 3')

setTimeout(() => {
  console.log('macroTask 2')
}, 0)

Promise.resolve().then(() => {
  console.log(`microTask 1`)
})

Promise.resolve().then(() => {
  console.log(`microTask 2`)
})
