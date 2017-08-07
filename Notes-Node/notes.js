console.log("starting notes.js");
const fs = require("fs");

// console.log(module);

module.exports = {
    addNote: (title, body) => {
        var notes = [];
        var note = {
            title,
            body
        };


        var s_notes = "";

        try {
            s_notes = fs.readFileSync("./Data/notes-data.json");
            notes = JSON.parse(s_notes);
        }
        catch (err) {
            console.log("error reading note");
        }

        var duplicateNotes = notes.filter((note) => note.title === title);

        if (duplicateNotes.length === 0) {
            notes.push(note);
            fs.writeFileSync("./Data/notes-data.json", JSON.stringify(notes))
        }



    },
    getAll: () => {

        console.log("getting all notes");
        return fs.readdirSync("./Data/");
    },
    getNote: (title) => {
        console.log("reading : ", title);
    },
    removeNote: (title) => {
        console.log("removing :", title);
    }





}