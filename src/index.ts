import { Command } from 'commander';
import clone from 'git-clone';
import inquirer from 'inquirer';

const program = new Command();
program
  .version('0.1.0', '-v, --version')
  .command('add <source> [destination]')
  .description('add a repository into a newly created directory')
  .action((source: string, destination: string) => {
    console.log(source, destination);
    console.log('clone command called');
  });

// 必须在.parse()之前，因为node的emit()是即时的
program.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    this is an example');
  console.log('');
});

program.parse(process.argv);

if (program.init) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'project-name',
      message: 'please input project name?',
      default: 'demo'
    },
    {
      type: 'input',
      name: 'project-description',
      message: 'please input project description?',
      default: 'demo project'
    }
  ]).then((answers) => {
    console.log('结果为:')
    clone('git@code.aliyun.com:xhzy-frontend/react-dva-ts-boilerplate.git', answers['project-name'], () => {
      console.log('项目初始化完成')
    });
    console.log(answers)
  })
}

if (program.generate) {
  console.log('generate something')
}

if (program.remove) {
  console.log('remove something')
}