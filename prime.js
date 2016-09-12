/* @flow */
'use strict';

exports.builder = {
};

let fill = function(number: number, start: number): Array<number> {
    let i = start || 1;
    let last = number;
    let _list = Array();

    // Fill the array from 2 to number inclusively
    for (;i <= last; i++) {
        _list.push(i);
    }

    return _list;
};

let isPrime = function(number: number): boolean {
    let subject = number;
    let testRange = fill(subject - 1, 2); // from 2 to number - 1

    // Divide by a number until itself
    let dividesBy = testRange.filter(num => isDivisible(subject, num));

    return dividesBy.length === 0;
};

let isDivisible = (a, b) => a % b === 0;

let prime = function(number: number): Array<number> {
    let numbers = fill(number, 2);

    let primes = numbers.filter(num => isPrime(num));

    return primes;
};

exports.handler = function(argv: any) {
    let number: number = argv.number;
    let _line = prime(number);
    console.log(_line.join(' '));
};

