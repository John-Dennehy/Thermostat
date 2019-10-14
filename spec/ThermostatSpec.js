'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(); 
  });

  it ('starts at 20 degrees', function() {
    expect(thermostat.temp).toEqual(20);
  });
});