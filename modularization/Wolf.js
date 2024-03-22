class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log("woawooawo!");
  }
}

module.exports = Wolf;
