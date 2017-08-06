console.log("starting notes.js");

// console.log(module);

module.exports = {
    addNote: (title, body) => {
        console.log("adding note : ", title, body);

    },
    getAll: () => {
        console.log("getting all notes");
    },
    getNote: (title) => {
        console.log("reading : ", title);
    },
    removeNote: (title) => {
        console.log("removing :", title);
    }





}