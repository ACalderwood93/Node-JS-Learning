console.log("starting notes.js");
const fs = require("fs");

// console.log(module);

module.exports = {
    addNote: (title, body) => {
        console.log("adding note : ", title, body);
        fs.writeFile(`./Data/${title}.txt`, body, function (err) {

            if (err)
                console.log("An error has occured writing file : ", title);
        })



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