// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Audi',
  model: 'R8',
  year: 1989,
  color: 'skyBlue',
  seats: 4,
  previousOwners: [],
  owner: 'manufacturer',
  running: false,
  sell (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  },
  paint (newColor) {
    this.color = newColor
  }
}

// Export the `Car` object
module.exports = Car
