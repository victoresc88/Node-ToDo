const argv = require('./config/yargs').argv;
const toDo = require('./to-dos/to-do');
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        break;
    case 'list':
        let taskList = toDo.getList();
        console.log(taskList);

        for (let task of taskList) {
            console.log('=========ToDo========='.green);
            console.log(task.description);
            console.log('Status: ', task.completed);
            console.log('======================'.green);
        }

        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        break;
    case 'remove':
        let removed = toDo.remove(argv.description);
        break;
    default:
        console.log('Unknown command');
}