// load the assert plugin (for testing)
var assert = require('assert')
var success = require('./helpers/success')

// // //// TEST PHASE III /////////////////////////////////////////
// // load the Car object for
var Car = require('../src/Car')
// // update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)

// // starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
// // run the success function once you're done with a set of tests
success()

// // normal case: test sell
console.log('Testing selling a car')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner didnt update to newOwner')
success()

// // error case: test sell to non-string argument
console.log('Testing selling a car to non-string')
honda.sell('0123')
assert.strictEqual(honda.owner, 'Lenny', 'Owner should stay if newOwner is non-string like')
success()

// // normal case: test sell update the previousOwners
console.log('Testing previousOwners after selling')
honda.sell('Shimei')
var lastPrevOwner = honda.previousOwners[ honda.previousOwners.length - 1 ]
assert.strictEqual(lastPrevOwner, 'Lenny', 'There should be two prevOwner after two successful selling')
success()

// // normal case: test painting
console.log('Testing painting a car')
honda.paint('Purple')
assert.strictEqual(honda.color, 'Purple', 'Color didnt update to newColor')
success()

// // error case: test painting to non-string argument
console.log('Testing painting a car with non-string')
honda.paint(false)
assert.strictEqual(honda.color, false, 'Color should stay if newColor is not a string')
success()

// // normal case: Start Car - change running to true
console.log('Start Car')
honda.start()
assert.strictEqual(honda.running, true, 'Should change the running value of the car to true')
success()

// // normal case: Off Car - change running to false
console.log('Off Car')
honda.off()
assert.strictEqual(honda.running, false, 'Should change the running value of the car to false')
success()

// // normal case: Driving to destination while car running
console.log('Driving to destination while car running')
honda.start()
honda.driveTo('Vienna')
assert.strictEqual(honda.running, true, 'Should return true if car is running')
success()

// // normal case: Driving to destination while car not running
console.log('Driving to destination while car not running')
honda.off()
honda.driveTo('Vienna')
assert.strictEqual(honda.running, false, 'Should return false if car is not running')
success()

// // normal case: Parking while car running
console.log('Parking while car running')
honda.start()
honda.park()
assert.strictEqual(honda.running, true, 'Should return false if car is running')
success()

// // normal case: Parking while car not running
console.log('Parking while car not running')
honda.off()
honda.park()
assert.strictEqual(honda.running, false, 'Should return true if car is not running')
success()
