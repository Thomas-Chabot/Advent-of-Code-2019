function calculateReqdFuel(value){
	return Math.floor(value/3) - 2;
}

function fuelAdd(fuel){
	let totalAdded = 0;
	while (fuel > 0){
		fuel = calculateReqdFuel(fuel);
		if (fuel <= 0) break;
		
		totalAdded += fuel;
	}
	return totalAdded;
}

function calc(x){
	let fuel = calculateReqdFuel(x);
	return fuel + fuelAdd(fuel);
}

let lines = document.body.innerText.split("\n");
let total = 0;
for (let line of lines){
	if (line != "")
		total += calc(parseInt(line));
}
console.log(total);