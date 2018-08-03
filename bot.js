var bot = require("./musicbot.js");

var serverName = "PRIVATE ROOM";
var textChannelName = "jennie-room";
var voiceChannelName = "KPOP AREA";
var aliasesFile = "aliases";
var botToken = "NDcxOTYyNjkwNDUwMDk2MTI4.DkWmDQ.vYiYZePycJJlfbVesNolQZisFYQ";

bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
bot.setYoutubeKey("AIzaSyDecLAzxce0L4BJCn1fkG9CGWsXclBPw1E");
