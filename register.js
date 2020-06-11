
//STEAMid = "hck"; STEAMmessage="LOL"; STEAMgames = "4,342,32,3423,4234",STEAMdefault="YIKER";

console.log("=======Registration Request Received!========");
console.log("=============================================");
var fs = require("fs");

const path = require('path');

//var data = "var user = {}; user.gameID = [\""+id+"\","+hash+"]; user.defaultMESSAGE = \""+pass.replace(/%20/g, ' ')+"\"; module.exports = user;";
if(!/[^0-9]/i.test(STEAMdefault))
var data = "var "+STEAMid+" = {};"+STEAMid+".gameID = ["+STEAMdefault+","+STEAMgames+"];"+STEAMid+".defaultMESSAGE = \""+STEAMmessage.replace(/%20/g, ' ')+"\";module.exports = "+STEAMid+";";
else
var data = "var "+STEAMid+" = {};"+STEAMid+".gameID = [\""+STEAMdefault.replace(/%20/g, ' ')+"\","+STEAMgames+"];"+STEAMid+".defaultMESSAGE = \""+STEAMmessage.replace(/%20/g, ' ')+"\";module.exports = "+STEAMid+";";

// .replace(/%20/g, ' ');
//console.log(Location+gameID+defaultID+defaultMESSAGE)
var dir = './user';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//(path.join(__dirname, "user/"+STEAMid+".js"))
fs.writeFile( ("./user/"+STEAMid+".js"), data, function(err, data) {
  if (err) console.log(err);
  
  console.log("==========Successfully Registered!===========");
  console.log("=============================================");
  console.log("=============================================");
}); 