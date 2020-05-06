import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'controller name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/{{name}}.js',
      templateFile: 'src/templates/hello.txt'
    }]
  });
};