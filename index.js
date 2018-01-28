// module.exports.js
// ========
var fs        = require('fs');
var http      = require('https');
var toolFiles = require('tool-files');
var git       = require('gulp-git');

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
 *  Dowload Wp Cli in the folder Wordpres
 */
self.dowloadWpCli = function() {
    toolFiles.dowloadFile(
        'https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar',
        './wordpress/wp-cli.phar'
    );
}
/**
 *  Dowload Wp Cli in the folder Wordpres
 */
self.dowloadWordpress = function() {
    return git.clone('https://github.com/WordPress/WordPress', {args: './wordpress'}, function(err) {
      // handle err
    });
}
