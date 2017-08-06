console.log("starting APP");

const fs = require("fs");
const os = require("os");
const notes = require("./notes");
const _ = require("lodash");
const yargs = require("yargs");


const argv = yargs.argv;


switch (command) {
    case "add":
        notes.addNote(argv.title, argv.body);
        break;
    case "list":
        notes.getAll();
        break;
    case "read":
        notes.read(argv.title);
        break;
    case "remove":
        notes.remove(argv.title);
        break;
    default:
        console.log("Command not recognised");
        break;
}

