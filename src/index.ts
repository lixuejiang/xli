import { Command } from 'commander';
import inquirer from 'inquirer';

const program = new Command();
program
  .version('0.1.0', '-v, --version')
  .option('-i, --init', 'init something')
  .option('-g, --generate', 'generate something')
  .option('-r, --remove', 'remove something');

// 必须在.parse()之前，因为node的emit()是即时的
program.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    this is an example');
  console.log('');
});

program.parse(process.argv);

if (program.init) {
  console.log('init something')
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'test',
      message: 'Are you handsome?',
      default: true
    }
  ]).then((answers) => {
    console.log('结果为:')
    console.log(answers)
  })
}

if (program.generate) {
  console.log('generate something')
}

if (program.remove) {
  console.log('remove something')
}