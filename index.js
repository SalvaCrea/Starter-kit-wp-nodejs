// module.exports.js
// ========
var fs        = require('fs');
var http      = require('https');
var toolFiles = require('tool-files');

var self = module.exports;
/**
 * Return Configuration
 * @return {[object]} Configuration object
 */
self.getConfiguration = function() {
    return toolFiles.getFileJson('./configuration.json');
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
self.getPathFolderTheme = function() {
    return './wordpress/wp-content/themes';
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
self.getPathTheme = function() {
    return self.getPathFolderTheme() + '/' + self.getConfiguration().themeName;
}
/**
 * Dowload and write file in the destination
 * @param {[string]} url  The url of file
 * @param {[string]} dest The path of destination
 * @param {Function} cb   Function callback
 */
self.dowloadFile = function(url, dest, cb = ()) {
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
            file.close(cb);  // close() is async, call cb after close completes.
        });
    }).on('error', function(err) { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        if (cb) cb(err.message);
    });
}
