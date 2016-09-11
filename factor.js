#!/usr/bin/env node

const argv = require('yargs')
.usage('Usage: $0 <command> [options]')
.command('prime <number>', 'Generate prime numbers', require('./prime.js'))
// .command('hcf <number1> <number2>', 'Show the highest common factor of two numbers')
.example('$0 prime 20', 'Show prime numbers up to 20')
.demand('command')
.help('help')
.argv;
