function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (isNaN(temperature)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    if (unit === "C") {
        result = (temperature * 9/5) + 32;
        document.getElementById("result").textContent = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else if (unit === "F") {
        result = (temperature - 32) * 5/9;
        document.getElementById("result").textContent = `${temperature}°F = ${result.toFixed(2)}°C`;
    }
}
