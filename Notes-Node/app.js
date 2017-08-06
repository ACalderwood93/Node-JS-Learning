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
        notes.addNote(argv.title,argv.body);
        break;
    case "list":
        notes.getAll();
        break;
    case "read":
        notes.getNote(argv.title);
        break;
    case "remove":
        notes.removeNote(argv.title);
        break;
    default:
        console.log("Command not recognised");
        break;
}

