function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_LIMIT = 10;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MID_LIMIT = 18;
  this.currentTemp = this.DEFAULT_TEMP;
  this.PowerSaveModeOn = true;
}

Thermostat.prototype.getCurrentTemp = function() {
  return this.currentTemp;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTempOrHigher()) {
    return;
  }
  this.currentTemp += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTempOrLower()) {
    this.currentTemp = this.MIN_LIMIT;
  } else {
    this.currentTemp -= 1;
  }
};

Thermostat.prototype.isMinimumTempOrLower = function() {
  return this.currentTemp <= this.MIN_LIMIT;
};

Thermostat.prototype.isMaximumTempOrHigher = function() {
  if (this.isPowerSaveOn() === true) {
    return this.currentTemp >= this.MAX_LIMIT_PSM_ON;
  }
  return this.currentTemp >= this.MAX_LIMIT_PSM_OFF;
};

Thermostat.prototype.isPowerSaveOn = function() {
  return this.PowerSaveModeOn;
};

Thermostat.prototype.powerSaveOn = function() {
  this.PowerSaveModeOn = true;
};

Thermostat.prototype.powerSaveOff = function() {
  this.PowerSaveModeOn = false;
};

Thermostat.prototype.resetTemp = function() {
  this.currentTemp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if ( this.currentTemp < this.MID_LIMIT) {
    return 'low-usage';
  }
  if (this.currentTemp >= this.MID_LIMIT  && this.currentTemp <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
};
