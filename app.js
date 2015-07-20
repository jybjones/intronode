#!/usr/bin/env node

var argv = require('yargs')
  // .default('name', 'World')
  .argv;
var prompt = require('prompt');

if (argv.help){
  console.log('intronode');
  console.log('v1.0.0');
  console.log('');
  console.log('usage:');
  console.log('');
  console.log('--help             print this message');
  console.log('--name={name}      input name');
  console.log('');
  process.exit(1);
}
if (argv.name) {
  printHelloMessage(argv.name)
} else {
  prompt.message = prompt.delimiter = '';
  prompt.start();

  prompt.get('name', function (err, result) {
    printHelloMessage(result.name);

  });
}

function printHelloMessage(name) {
  console.log('Hello ' + name);
  process.stdout.write('Hello ' + name + ' Again!\n');
}

// console.error('ooops');
// process.stderr.write('OMG HELP!!\n');


// console.log(process.argv);
// console.log(argv);
// }
