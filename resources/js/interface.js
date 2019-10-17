
$(document).ready(function () {
  var thermostat = new Thermostat()
  updateTemperature()

  $('#temp-up').click(function () {
    thermostat.up()
    updateTemperature()
  })

  $('#temp-down').click(function () {
    thermostat.down()
    updateTemperature()
  })

  $('#temp-reset').click(function () {
    thermostat.resetTemp()
    updateTemperature()
  })

  $('#psm-checkbox').click(function () {
    if ($('#psm-checkbox').is(':checked')) {
      thermostat.powerSaveOn()
      if (thermostat.currentTemp > thermostat.MAX_LIMIT_PSM_ON) {
        thermostat.setTemp(thermostat.MAX_LIMIT_PSM_ON)
      }
      $('#pwm-status').text('Power Save: On')
    } else {
      thermostat.powerSaveOff()
      $('#pwm-status').text('Power Save: Off')
    }
    updateTemperature()
  })

  function updateTemperature() {
    $('#current-temperature').text(thermostat.currentTemp)
    $('#current-temperature').attr('class', thermostat.energyUsage())
  };
})
