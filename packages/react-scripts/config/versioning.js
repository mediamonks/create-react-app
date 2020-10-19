/*
It's also possible to override the version number during a build.
yarn build -- --versionNumber=v1
 */
let version = new Date().getTime();

const argv = require('yargs').argv;
if(argv.versionNumber){
  version = argv.versionNumber;
}

function getVersionPath(environment) {
  if (environment === 'development') {
    return '';
  }

  return '/static/version/' + version;
}

exports.getVersionPath = getVersionPath;