var sass = require("node-sass");
var fs = require("fs");
var ejs = require("ejs");

sass.render({
    file: "./stylesheets/index.scss"
}, function(error, result) {
    if(error) {
        return console.log(error);
    }
    fs.writeFile("./style.css", result.css, function(error) {
        console.log(error);
    });
});
var directories = [
    __dirname + "/views/",
    __dirname + "/views/about/"
];

directories.forEach(function(directory) {
    fs.readdir(directory, function(error, files) {
        if(error) {
            return console.log(error);
        }
        var ejsList = files.filter(function(file) {
            return file.match(/\.ejs$/) && !file.match(/templates/);
        });
        ejsList.forEach(function(ejsFile) {
            ejs.renderFile(directory + ejsFile, function(error, result) {
                if(error) {
                    return console.log(error);
                }
                fs.unlink(directory + ejsFile.replace("ejs", "html"), function(error) {
                    if(error) {
                        return console.log(error);
                    }
                    fs.writeFile(directory + ejsFile.replace("ejs", "html"), result, function(error) {
                        if(error) {
                            return console.log(error);
                        }
                    });
                });
            });
        });
    });
});