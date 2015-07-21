#!/usr/bin/env node

var argv = require('yargs').argv;
var prompt = require('prompt');
/////import the help.js file here, in essence help becomes the function//
var help = require('./app/help');
var zipFile = require('./app/zipfile');
var csvToJson = require('/.app/csvToJson');

var fs = require('fs');

if (argv.help){
  help();
}

if (argv.file) {
  zipFile(argv.file);
}

if (argv.csv) {
  csvToJson(argv.csv);
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
  var options = { encoding: 'utf8'};
  // print the bigfile
  var stream = fs.createReadStream('./app/bigfile');
  stream.pipe(process.stdout);
    process.stdout.write('Hello ' + name + ' Again!\n');
    }


