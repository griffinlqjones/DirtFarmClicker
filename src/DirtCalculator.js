export const DirtCalculator = function() {
  this.dirtPerSqrMeter = function(size, rate) {
    return size * rate;
  };

  this.litersToMeters = function(liters) {
    // 1 liter == 0.001 meters
    return liters / 1000;
  };

  this.MetersToliters = function(meters) {
    // 1 meter == 1000 liters
    return meters * 1000;
  };
};
