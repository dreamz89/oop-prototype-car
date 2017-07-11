// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, previousOwners, owner, running, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    if (typeof passengers === 'undefined') {
      this.passengers = []
    }
    else {
      this.passengers = [passengers]
    }
  }
  sell (newOwner) {
    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }
  paint (newColor) {
    this.color = newColor
  }
  start () {
    this.running = true
  }
  off () {
    this.running = false
  }
  driveTo (destination) {
    if (this.running === true) {
      console.log('Driving to' + destination)
      return true
    }
    else {
      return false
    }
  }
  park () {
    if (this.running === false) {
      console.log('Parked!')
      return true
    }
    else {
      return false
    }
  }
  pickUp (name) {
    if (this.running === true && this.passengers.length <= seats - 1) {
      console.log('Driving to pick up' + name)
      this.passengers.push(name)
      return true
    }
    else {
      return false
    }
  }
  dropOff (name) {
    if (this.passengers.includes(name) && this.running === true) {
      var index = this.passengers.indexOf(name)
      this.passengers.splice(index, 1)
      console.log('Driving to drop off' + name)
      return true
    }
    else {
      return false
    }
  }
  passengerCount () {
    return this.passenger.length
  }
}

module.exports = Car

// export the Car class //
// this is required for the carTest.js to load this //
