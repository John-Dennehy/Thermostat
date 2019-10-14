'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat(); 
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases the temp with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases the temp with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }

    expect(thermostat.getCurrentTemp()).toEqual(10);

  });

});