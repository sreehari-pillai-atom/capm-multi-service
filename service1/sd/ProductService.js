const cds = require("@sap/cds");

module.exports = cds.service.impl( async function () {
    console.log("File loaded");
    const db = await cds.connect.to("db");
    this.before("CREATE" , "*" ,async (req)=>{
        console.log("Create event from service");
    });
    
});