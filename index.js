// module.exports.js
// ========

var toolFiles = require('tool-files');
var self = module.exports;
/**
 * Return Configuration
 * @return {[object]} Configuration object
 */
self.getConfiguration = function(){
    return toolFiles.getFileJson('./configuration.json');
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
self.getPathFolderTheme = function(){
    return './wordpress/wp-content/themes';
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
self.getPathTheme = function(){
    return self.getPathFolderTheme() + '/' + self.getConfiguration().themeName;
}
