"use strict";
var path = require('path');
var walk    = require('walk')
  , fs      = require('fs')
    , walker  = walk.walk("./node_modules", { followLinks: false });

      walker.on("file", fileHandler);
      walker.on("errors", errorsHandler); // plural
      walker.on("end", endHandler);

function fileHandler(root, fileStat, next) {
    fs.readFile(path.resolve(root, fileStat.name), function(buffer) {
        console.log(fileStat.name, buffer.byteLength);
        next();
    });
}

function errorsHandler(root, nodeStatsArray, next) {
      nodeStatsArray.forEach(function (n) {
              console.error("[ERROR] " + n.name)
              console.error(n.error.message || (n.error.code + ": " + n.error.path));
        });
        next();
}

function endHandler() {
      console.log("all done");
}

