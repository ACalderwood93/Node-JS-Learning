console.log("starting notes.js");

// console.log(module);

module.exports = {

    age: 24,
    addNote: () => {
        console.log("addNote");
        return "New Note";
    },
    add: (a, b) => {
        return a + b;

    },
    addNote: (title, body) => {
        console.log("adding note : ", title, body);

    },
    getAll: () => {
        console.log("getting all notes");
    },
    read: (title) => {
        console.log("reading : ", title);
    },
    remove: (title) => {
        console.log("removing : ", title);
    }





}