
const fs = require("fs");
const os = require("os");
const notes = require("./notes");
const _ = require("lodash");
const yargs = require("yargs");

var command = process.argv[2];
const argv = yargs.argv;


switch (argv._[0]) {
    case "add":
        var note = notes.addNote(argv.title, argv.body);

        if (note) {
           notes.logNote(note);
        }
        else {
            console.log("Title already exsists")
        }
        break;
    case "list":
        var allNotes = notes.getAll();
        allNotes.forEach(note => notes.logNote(note));
        break;
    case "read":

        var note = notes.getNote(argv.title)
        notes.logNote(note);
        break;
    case "remove":
        notes.removeNote(argv.title) ? console.log(`${argv.title} was deleted`) : console.log(`${argv.title} was not found`);

        break;
    default:
        console.log("Command not recognised");
        break;
}

