const cds = require("@sap/cds");

module.exports = cds.service.impl( async function () {
    console.log("APPLOG:File loaded from /srv/sd/ProductService.js ");
    const db = await cds.connect.to("db");
    this.before("CREATE" , "*" ,async (req)=>{
        console.log("Create event from service");
    });
    this.before("READ" , "*" ,async (req)=>{
        console.log("Trying to read something");
    });
    
});