const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

const loadDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const create = (description) => {
    loadDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);

    saveDB();

    return toDo;
}

const getList = () => {
    loadDB();
    return toDoList;
}

const update = (description, completed = true) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description === description)

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();

        return true;
    } else {
        return false;
    }
}

const remove = (description) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description === description)

    if (index >= 0) {
        toDoList.splice(index, 1);

        saveDB();

        return true;
    } else {
        console.log('No task was found');
        return false;
    }
}

module.exports = {
    create,
    getList,
    update,
    remove
}