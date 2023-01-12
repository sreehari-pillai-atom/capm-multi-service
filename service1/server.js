
const proxy = require("@sap/cds-odata-v2-adapter-proxy");
const cds = require('@sap/cds');

var recursive = require("recursive-readdir");

cds.on("bootstrap", (app) => {
    app.use(proxy());
    const cds_swagger = require('cds-swagger-ui-express')
    app.use(cds_swagger());

    
    recursive(__dirname, function (err, files) {
        console.log("Files from:"+__dirname);
        console.log(files);
    });

    recursive('/home/vcap/app/', function (err, files) {
      console.log("Files from: /home/vcap/app/");
      console.log(files);
  });

});
module.exports = cds.server; 