console.log("starting APP");

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
            console.log(`${note.title} has been saved`);
            console.log("---");
            console.log("Body of Note :", note.body);
        }
        else {
            console.log("Title already exsists")
        }
        break;
    case "list":
        var allNotes = notes.getAll();
        allNotes.forEach(note => console.log(note));
        break;
    case "read":
        notes.getNote(argv.title);
        break;
    case "remove":
       notes.removeNote(argv.title)? console.log(`${argv.title} was deleted`) :console.log(`${argv.title} was not found`); 
        
        break;
    default:
        console.log("Command not recognised");
        break;
}

