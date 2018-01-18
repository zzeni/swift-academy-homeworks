(function () {
	"use strict";
	// правиме първи клас Fish, функция-конструктор //
	
	function Fish(name, ph, gh, degr) {
		this.name = name;
		this.ph = ph;
		this.gh = gh;
		this.degr = degr;
	}
	// задаваме на Fish - метод за принтиране в конзола //

	Fish.prototype.waterConditions = function () {
		console.log(
			'This ' + this.name + ' fish prefers pH of ' + this.ph +
			' points. For the gH and Temperature respectivelly: ' +
			this.gh + ' points / ' + this.degr + ' degrees Celsius.'
		);
	};

	// добавяме в класа два нови обекта //

	var ancistrus = new Fish('Ancistrus', 7, 12, 26);
	var goldFish = new Fish('Goldfish', 6.8, 11, 27);

	// правиме втори клас Snail, функция-конструктор //

	function Snail(name, ph, gh, degr) {
		this.name = name;
		this.ph = ph;
		this.gh = gh;
		this.degr = degr;
	}
	// задаваме на клас Snail - метод за принтиране в конзола //

	Snail.prototype.waterConditions = function () {
		console.log(
			'This ' + this.name + ' prefers pH of ' + this.ph +
			' points. For the gH and Temperature respectivelly: ' +
			this.gh + ' points / ' + this.degr + ' degrees Celsius.'
		);
	};

	// добавяме в клас Snail два нови обекта //

	var burgundySnail = new Snail('Burgundy snail', 8, 17, 25);
	var giantAfricanSnail = new Snail('Giant African snail', 9, 19, 26);

	// правим метод на клас Fish, който да ползва елементи от клас Snail//

	Fish.prototype.snailPlay = function () {
		console.log(
			'This young ' + this.name + ' prefers playing with the old ' + burgundySnail.name + " and avoids playing with the aggresive " + giantAfricanSnail.name + "."
		);
	};

	// принтираме в конзолата //

	console.log("Class 1 instance: ");
	console.log(ancistrus);
	console.log();
	console.log("Class 2 instance: ");
	console.log(giantAfricanSnail);
	console.log();
	console.log("Class 1 method: ");
	goldFish.waterConditions();
	console.log();
	console.log("Class 2 method: ");
	giantAfricanSnail.waterConditions();
	console.log();
	console.log("Class 1 method using Class 1 and Class 2 instances: ");
	goldFish.snailPlay();
	console.log();
})();
