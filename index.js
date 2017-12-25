// starterKitNodeJs.js
// ========

var toolFiles = require('tool-files');
var starterKitNodeJs = {};

/**
 * Return Configuration
 * @return {[object]} Configuration object
 */
starterKitNodeJs.getConfiguration = function(){
  return toolFiles.getFileJson('./configuration.json');
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
starterKitNodeJs.getPathFolderTheme = function(){
  return './wordpress/wp-content/themes';
}
/**
 * Return Path container theme folder
 * @return {[string]} Path theme folder
 */
starterKitNodeJs.getPathTheme = function(){
  return this.getPathFolderTheme() + '/' + this.getConfiguration().themeName;
}

module.exports = starterKitNodeJs;
