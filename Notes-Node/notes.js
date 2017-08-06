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

    }



}