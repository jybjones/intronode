#!/usr/bin/env node

var argv = require('yargs')
  // .default('name', 'World')
  .argv;
var prompt = require('prompt');
/////import the help.js file here, in essence help becomes the function//
var help = require('./app/help');

if (argv.help){
  help();
  // help.printHelpMessage();
  // process.exit(1);
}
//printing msg based on the argv statement/////
  prompt.override = argv;
  prompt.message = prompt.delimiter = '';
  prompt.start();

  prompt.get('name', function (err, result) {
    printHelloMessage(result.name);
  });

function printHelloMessage(name) {
  console.log('Hello ' + name);
  process.stdout.write('Hello ' + name + ' Again!\n');
}
