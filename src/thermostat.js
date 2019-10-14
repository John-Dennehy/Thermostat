'use strict';

function Thermostat () {
  this.MINIMUM_TEMP = 10;
  this._temp = 20;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this._temp;
};

Thermostat.prototype.up = function() {
  this._temp += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemp()) {
    return;
  }
  this._temp -= 1;
};

Thermostat.prototype.isMinimumTemp = function() {
  return this._temp === this.MINIMUM_TEMP;
};
