const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of ToDo'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Set ToDo on completed/pending'
}

const argv = require('yargs')
    .command('create', 'Creates a ToDo element', { description })
    .command('update', 'Updates the state of a ToDo', { description, completed })
    .command('remove', 'Deletes a ToDo element', { description })
    .help()
    .argv;

module.exports = {
    argv
}