 var voltage;
    var power;
    var current;
    var totalOutput;
    document.querySelector("#electricity-calculation").onclick = function(){
        var voltage = document.getElementById('current-voltage').value;
        var power = document.getElementById('power-output').value;
        var current = document.getElementById('electricity-complete');
        var totalOutput = document.getElementById('current-output');
        voltage = voltage.replace(/,/,".");
        power = power.replace(/,/,".");
        if (isNaN(parseFloat(voltage)) || isNaN(parseFloat(power))) {
            totalOutput.value = "Füllen Sie alle mit Stern markierten Felder aus!";
        } else {
            current.value = parseFloat(power) / parseFloat(voltage) ;
            current.value = Math.round(current.value * 100 ) / 100;
        }
        return false;
    }
    
    var power_voltage;
    var power_current;
    var performance_complete;
    var performance_error_output;
    document.querySelector("#calculate-performance").onclick = function(){
        var power_voltage = document.getElementById('power-voltage').value;
        var power_current = document.getElementById('power-current').value;
        var performance_complete = document.getElementById('performance-complete');
        var performance_error_output = document.getElementById('performance-error-output');
        power_voltage = power_voltage.replace(/,/,".");
        power_current = power_current.replace(/,/,".");
        if (isNaN(parseFloat(power_voltage)) || isNaN(parseFloat(power_current))) {
            performance_error_output.value = "Füllen Sie alle mit Stern markierten Felder aus!";
        } else {
            performance_complete.value = parseFloat(power_current) * parseFloat(power_voltage) ;
            performance_complete.value = Math.round(performance_complete.value * 100 ) / 100;
        }
        return false;
    }
    
    
    var voltage_current;
    var voltage_power;
    var voltage_complete;
    var voltage_error_output;
    document.querySelector("#voltage-calculation").onclick = function(){
        var voltage_current = document.getElementById('voltage-current').value;
        var voltage_power = document.getElementById('voltage-power').value;
        var voltage_complete = document.getElementById('voltage-complete');
        var voltage_error_output = document.getElementById('voltage-error-output');
        voltage_current = voltage_current.replace(/,/,".");
        voltage_power = voltage_power.replace(/,/,".");
        if (isNaN(parseFloat(voltage_current)) || isNaN(parseFloat(voltage_power))) {
            voltage_error_output.value = "Füllen Sie alle mit Stern markierten Felder aus!";
        } else {
            voltage_complete.value = parseFloat(voltage_power) / parseFloat(voltage_current) ;
            voltage_complete.value = Math.round(voltage_complete.value * 100 ) / 100;
        }
        return false;
    }

    
    var battery_residual_energy;
    var battery_voltage;
    var battery_capacity;
    var battery_performance;
    var performance_complete;
    var battery_life_hours;
    var battery_life_minute;
    var battery_life_error_output
    document.querySelector("#power-performance").onclick = function(){
        var battery_residual_energy = document.getElementById('battery-residual-energy').value;
        var battery_voltage = document.getElementById('voltage-battery-power').value;
        var battery_capacity = document.getElementById('capacity-battery-power').value;
        var battery_performance = document.getElementById('power-battery-power').value;
        var performance_complete = document.getElementById('battery-performance-complete');
        var battery_life_hours = document.getElementById('battery-power-hours');
        var battery_life_minute = document.getElementById('battery-power-minutes');
        var battery_life_error_output = document.getElementById('battery-performance-error-output');
        battery_residual_energy = battery_residual_energy.replace(/,/,".");
        battery_voltage = battery_voltage.replace(/,/,".");
        battery_capacity = battery_capacity.replace(/,/,".");
        battery_performance = battery_performance.replace(/,/,".");
        if (isNaN(parseFloat(battery_residual_energy)) || isNaN(parseFloat(battery_voltage)) || isNaN(parseFloat(battery_capacity)) || isNaN(parseFloat(battery_performance))) {
            battery_life_error_output.value = "Füllen Sie alle mit Stern markierten Felder aus!";
        } else {
            performance_complete.value = parseFloat(battery_capacity) * parseFloat(battery_voltage) / parseFloat(battery_performance) * (1-parseFloat(battery_residual_energy) / 100) * 60 ;
            performance_complete.value = Math.round(performance_complete.value * 1 );
            battery_life_hours.value = performance_complete.value / 60 ;
            battery_life_hours.value = Math.floor(battery_life_hours.value);
            battery_life_minute.value = parseFloat(performance_complete.value) - parseFloat(battery_life_hours.value) * 60 ;
            battery_life_minute.value = Math.round(battery_life_minute.value * 1 ) / 1;
        }
        return false;
    }


    var battery_charging_time_capacity;
    var battery_charging_time_current;
    var battery_charging_time_efficiency;
    var battery_charging_complete;
    var battery_charging_hours;
    var battery_charging_minutes;
    document.querySelector("#calculate-life").onclick = function(){
        var battery_charging_time_capacity = document.getElementById('charging-time-battery-capacity').value;
        var battery_charging_time_current = document.getElementById('battery-charging-current').value;
        var battery_charging_time_efficiency = document.getElementById('battery-charging-efficiency').value;
        var battery_charging_complete = document.getElementById('full-charge-time');
        var battery_charging_hours = document.getElementById('full-charge-hours');
        var battery_charging_minutes = document.getElementById('full-charge-minutes');
        var battery_time_error_output = document.getElementById('full-charge-minutes-display');
        battery_charging_time_capacity = battery_charging_time_capacity.replace(/,/,".");
        battery_charging_time_current = battery_charging_time_current.replace(/,/,".");
        battery_charging_time_efficiency = battery_charging_time_efficiency.replace(/,/,".");
        if (isNaN(parseFloat(battery_charging_time_capacity)) || isNaN(parseFloat(battery_charging_time_current)) || isNaN(parseFloat(battery_charging_time_efficiency))) {
            battery_time_error_output.value = "Füllen Sie alle mit Stern markierten Felder aus!";
        } else {
            battery_charging_complete.value = (parseFloat(battery_charging_time_capacity) / parseFloat(battery_charging_time_current)) * 60 * ( 1 + 1 - parseFloat(battery_charging_time_efficiency) / 100) ;
            battery_charging_complete.value = Math.round(battery_charging_complete.value * 1 );

            battery_charging_hours.value = battery_charging_complete.value / 60 ;
            battery_charging_hours.value = Math.floor(battery_charging_hours.value);

            battery_charging_minutes.value = parseFloat(battery_charging_complete.value) - parseFloat(battery_charging_hours.value) * 60 ;
            battery_charging_minutes.value = Math.round(battery_charging_minutes.value * 1 ) / 1;
        }
        return false;
    }