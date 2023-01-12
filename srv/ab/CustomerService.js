const cds = require("@sap/cds");

module.exports = cds.service.impl( async function () {
    console.log("APPLOG:File loaded from /srv/ab/CustomerService.js ");
    const db = await cds.connect.to("db");
    this.before("CREATE" , "*" ,async (req)=>{
        console.log("Create event from service - customer service");
    });
    this.before("READ" , "*" ,async (req)=>{
        console.log("Trying to read something - Customer service");
    });
    
});