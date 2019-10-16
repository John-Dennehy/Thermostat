$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()

  $('#temp-up').click(function () {
    thermostat.increaseTemperature()
    updateTemperature()
  })

  $('#temp-down').click(function () {
    thermostat.decreaseTemperature()
    updateTemperature()
  })

  $('#temp-reset').click(function () {
    thermostat.reset()
    updateTemperature()
  })

  $('#psm-on').click(function () {
    thermostat.powerSavingModeOn()
    $('#power-saving').text('on')
    updateTemperature()
  })

  $('#psm-off').click(function () {
    thermostat.powerSavingModeOff()
    $('#power-saving').text('off')
    updateTemperature()
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature)
  };
})

