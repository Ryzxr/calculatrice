let displayValue = '';

function addToDisplay(value) {
	displayValue += value;
	document.getElementById('result').value = displayValue;
}

function clearDisplay() {
	displayValue = '';
	document.getElementById('result').value = displayValue;
}

function backspace() {
	displayValue = displayValue.slice(0, -1);
	document.getElementById('result').value = displayValue;
}

function calculate() {
	let result = eval(displayValue);
	displayValue = result.toString();
	document.getElementById('result').value = displayValue;
}
