class Thermostat {
  constructor() {
    this.DEFAULT_TEMP = 20;
    this.MIN_LIMIT = 10;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MID_LIMIT = 18;
    this.currentTemp = this.DEFAULT_TEMP;
    this.PowerSaveModeOn = true;
  }

  getCurrentTemp() {
    return this.currentTemp;
  }

  up() {
    if (this.isMaximumTempOrHigher()) {
      return;
    }
    this.currentTemp += 1;
  }

  down() {
    if (this.isMinimumTempOrLower()) {
      this.currentTemp = this.MIN_LIMIT;
    } else {
      this.currentTemp -= 1;
    }
  }

  setTemp(newTemp) {
    this.currentTemp = newTemp;
    if (this.isMinimumTempOrLower()) {
      this.currentTemp = this.MIN_LIMIT;
    }
    if (this.isPowerSaveOn()) {
      return this.currentTemp >= this.MAX_LIMIT_PSM_ON;
    }
    return this.currentTemp >= this.MAX_LIMIT_PSM_OFF;
  }

  isMinimumTempOrLower() {
    return this.currentTemp <= this.MIN_LIMIT;
  }

  isMaximumTempOrHigher() {
    if (this.isPowerSaveOn()) {
      return this.currentTemp >= this.MAX_LIMIT_PSM_ON;
    }
    return this.currentTemp >= this.MAX_LIMIT_PSM_OFF;
  }

  isPowerSaveOn() {
    return this.PowerSaveModeOn;
  }

  powerSaveOn() {
    this.PowerSaveModeOn = true;
  }

  powerSaveOff() {
    this.PowerSaveModeOn = false;
  }

  resetTemp() {
    this.currentTemp = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.currentTemp < this.MID_LIMIT) {
      return 'low-usage';
    }
    if (
      this.currentTemp >= this.MID_LIMIT &&
      this.currentTemp <= this.MAX_LIMIT_PSM_ON
    ) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
}
