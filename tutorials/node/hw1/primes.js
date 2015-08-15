#!/usr/bin/env node

var isPrime = function(primeNumbers, number) {
	var isPrimeNumber = true;

	for (var i = 0; i < primeNumbers.length; ++i) {
		if (number % primeNumbers[i] == 0) {
			isPrimeNumber = false;
			break;
		}
	}

	return isPrimeNumber;
}

var getPrimes = function(totalAmount) {
	var primeNumbers = [];
	var found = 0;

	for (var number = 2; found < totalAmount; ++number) {
		if (isPrime(primeNumbers, number)) {
			primeNumbers.push(number);
			++found;
		}
	}

	return primeNumbers;
};

var main = function() {
	var fs = require('fs');
	var outfile = "primes.txt";
	var totalAmount = 100;
	var primeNumbers = getPrimes(totalAmount).join(",");
	fs.writeFileSync(outfile, primeNumbers);
}

main();
