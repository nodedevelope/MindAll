var sass = require("node-sass");
var fs = require("fs");

sass.render({
    file: "./style.scss"
}, function(error, result) {
    if(error) {
        return console.log(error);
    }
    fs.writeFile("./style.css", result.css, function(error) {
        console.log(error);
    });
});