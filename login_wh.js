

console.log("========LOGGIN IN WITHOUT AUTH CODE===========");
console.log("=============================================");
console.log("=============================================");
console.log("STEAM ID : "+id);
console.log("STEAM PASS : ********************************");
console.log("=============================================");

var fs = require('fs'); 
const path = require('path');
// (path.join(__dirname, "user/"+Location+".js")
//path.join(__dirname, "user/"+id+".js"))
if (fs.existsSync( "./user/"+id+".js" ) ) {
    var xxx = require(path.join(__dirname, "./user/"+id));
    var GAME = xxx.gameID;
    var DM = xxx.defaultMESSAGE;
    var admin = "76561198133559183";
}

else {
    console.log("======PLEASE REGISTER YOUR ACCOUNT FIRST======");
    console.log("WITHOUT REGISTRATION GAMES"); 
    console.log("AND MESSAGE WOULD SET TO DEFAULT");
    var GAME = [];
    var DM = "Hey! I'm AFK right now. TTYL! (reply help for more)"
    var admin = "76561198133559183";
}

console.log("=============================================");
console.log("Games Idling : "+GAME);
console.log("Default Message : "+DM);
console.log("=============================================");
console.log("=============================================");


const steamUser = require("steam-user");
const steamTotp = require("steam-totp");




const client = new steamUser();
var arr;
var delay=[];


const logOnOptions = {
    accountName: id,
    password: pass.replace(/%20/g, ' '),
    rememberPassword: true,
    machineName: 'god',
    //twoFactorCode: hash
};



client.logOn(logOnOptions);
//console.log("Parameter Passed");
console.log("================IDLE STARTED=================");



client.on('loggedOn',() =>{

    //console.log("logged on");
    console.log("================WENT ONLINE=================");
    console.log("=============================================");
    console.log("=============================================");
    client.setPersona(steamUser.Steam.EPersonaState.Snooze);
    client.gamesPlayed(GAME);

});


client.on("friendMessage", function(steamID,message){
    arr = ((((""+message).toLowerCase()).trim())).split(" ");
    //console.log(arr);
    var timeInMss = new Date().getTime();
    
    
    if((delay.includes(steamID+""))==false){
        delay[delay.length] = steamID+"";
        delay[(steamID*(-1))] = 0;
    }
    if( arr[0] == ("hi") ){
        client.chatMessage(steamID,"hello world");
    }
    
    else if( arr[0] == ("about") ){
        client.chatMessage(steamID,"Coded By HARSH Alias Dragoon http://dragoon.play.ai");
    }

    else if(arr[0]=="roll"){
        if((arr[1])==undefined){
            client.chatMessage(steamID,"Dice was rolled and the result was : '"+(Math.floor(Math.random() * 7))+"'");
        }
        else if((arr[2])==undefined){
            if(isNaN(Number(arr[1]))){
                client.chatMessage(steamID,"Dice couldn't be rolled, to do so enter the valid number.");
            }
            else {
                client.chatMessage(steamID,"Dice was rolled and the result was : '"+(Math.floor(Math.random() * (Number(arr[1])+1))) +"'");
            }
        }
        else {
            if(isNaN(Number(arr[1]))){
                client.chatMessage(steamID,"Dice couldn't be rolled, to do so enter the valid number.");
            }
            else if(isNaN(Number(arr[2]))){
                client.chatMessage(steamID,"Dice couldn't be rolled, to do so enter the valid number.");
            }
            else if(Number(arr[1]) > Number(arr[2])){
                client.chatMessage(steamID,"First number can't be greater than Second one.");
            }
            else {
                client.chatMessage(steamID,"Dice was rolled and the result was : '"+(Math.floor(Math.random() * (Number(arr[2])-Number(arr[1]))  + Number(arr[1]))) +"'");
            }
        }
    }
  
    else if( arr[0]=="time" ){
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;  
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        var dateIST = ISTTime.getDate()
        var monthIST = ISTTime.getMonth()
        var yearIST = ISTTime.getYear()
        var hoursIST = ISTTime.getHours()
        var minutesIST = ISTTime.getMinutes()
        var secondsIST = ISTTime.getSeconds()
        
        var datetime = ("\nYear -> "+"20"+ ( (""+yearIST).substring(1) ) + "\nMonth -> " + monthIST + "\nDate -> " + dateIST + "\nTime-> " + hoursIST+":"+minutesIST+":"+secondsIST);
        client.chatMessage(steamID, "Current Time : "+datetime);
    }
  
  
  else if( arr[0]=="default"){
        if((arr[1])==undefined){
            client.chatMessage(steamID,"Please select the valid options, \"0\" : To stop the service or \"1\" : To re-start the service"); //and \"1\": To start the service.
        }
        else {
            if(isNaN(Number(arr[1]))){
                client.chatMessage(steamID,"Please select the right integer.");
            }
            else {
                if(arr[1]==0){
                    fs.readFile("./test.txt", 'utf8', function (err,data) {
                        if (err) {
                            return console.log(err);
                          }
                        if( data.includes(steamID)){
                            var result = data;
                            client.chatMessage(steamID,"You have already done this step.");
                        }
                        else {
                            var result = data+(steamID+" ")+"\t";
                            client.chatMessage(steamID,"You won't be getting any default message now onwards, be aware in future if I don't reply I probably AFK!!");
                        }
                      
                        fs.writeFile("./test.txt", result, 'utf8', function (err) {
                           if (err) return console.log(err);
                           
                        });
                    });
                }
                else if(arr[1]==1){
                    fs.readFile("./test.txt", 'utf8', function (err,data) {
                        if (err) {
                            return console.log(err);
                          }
                        if( data.includes(steamID)){
                            var result = data.replace(steamID,"");;
                            client.chatMessage(steamID,"You will be getting default message now onwards.");
                        }
                        else {
                            var result = data;
                            client.chatMessage(steamID,"You have already done this step.");
                        }
                      
                        fs.writeFile("./test.txt", result, 'utf8', function (err) {
                           if (err) return console.log(err);
                           
                        });
                    });
                }
                else{
                    client.chatMessage(steamID,"No integer other than \"0\" and \"1\" would work.");
                }
            }
        }
  }
  
  
  else if(arr[0]=="ncrobin"){
        client.chatMessage(steamID,"Hello! Guys! NC! Here!,\nHere is your PIZZA https://www.youtube.com/watch?v=X6M6oYyuiYM");
        
    }
  
  
  




    else if(arr[0]=="help"){
        client.chatMessage(steamID, "You can use the following commands: \n\n 1. 'hi' : Will return greetings. \n 2. 'about' : Will return the information related the bawt. \n 3. 'roll <number>' : Will roll a number from 0 to specific number, by default it will roll a six faced dice. \n 4. 'time' : Will provide the current IST (Indian Standard Time). \n 5. 'default <\"0\" or \"1\"> : Manage the default \"AFK\" message, \"0\" for deactivation or \"1\" for re-activation ");
    }
  
  


    else {
        if( (steamID != admin) &&  (  ( Number(timeInMss) - delay[(steamID*(-1))] ) > 900000 ) ){
            fs.readFile("./test.txt", 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                  }
                if( data.includes(steamID)){
                    
                }
                else {
                    client.chatMessage(steamID,DM);
                    delay[(steamID*(-1))] = Number(timeInMss);
                }
            });
        }

            //admin only stuff
        if(steamID==admin){
            if(arr[0]=="log"){
                client.chatMessage(steamID,"Logging OFF!!");
                client.logOff();
            }
            if(arr[0]=="restart"){
                client.chatMessage(steamID,"Restarting!!");
                client.relog();
            }
            if(arr[0]=="stop_idle"){
                client.chatMessage(steamID,"Stopped Idle!!");
                client.gamesPlayed([]);
            }
            if(arr[0]=="start_idle"){
                client.chatMessage(steamID,"Started Idle!!");
                client.gamesPlayed(GAME);
            }
            if(arr[0]=="offline"){
                client.chatMessage(steamID,"Went Offline!!");
                client.setPersona(steamUser.Steam.EPersonaState.Offline);
            }
            if(arr[0]=="online"){
                client.chatMessage(steamID,"Went Online!!");
                client.setPersona(steamUser.Steam.EPersonaState.Snooze);
            }
            if(arr[0]=="stop"){
                client.chatMessage(steamID,"Went Offline and Stopped Idle!!");
                client.gamesPlayed([]);
                client.setPersona(steamUser.Steam.EPersonaState.Offline);
            }
            if(arr[0]=="start"){
                client.chatMessage(steamID,"Went Online and Started Idle!!");
                client.gamesPlayed(GAME);
                client.setPersona(steamUser.Steam.EPersonaState.Snooze);
            }

            if(arr[0]=="admin"){
                client.chatMessage(steamID,"'log', 'restart', 'stop_idle', 'start_idle', 'offline', 'online', 'stop', 'start' and 'admin'");
            }
        }
    }

});



client.on("sentry", function(sentry){
    fs.writeFile('sentryfile',sentry,function(err) {
        if(err){
          console.log(err);
        } else {
          console.log('Sentry Saved');
        }});
});


client.on("error", function(err) {
    console.log(err); 
});

