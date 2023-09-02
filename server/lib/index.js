let admin = require("firebase-admin");

let serviceAccount = require("../config/firabseConfig.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports=admin;