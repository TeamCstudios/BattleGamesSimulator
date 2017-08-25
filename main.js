//Defaults
var defaultPlayers = 24;
var defaultMaxTeamSize = 6;

//Player names array
var playernames = [];

//Non-static variables related to  players
var pCountFloor = 8;
var pCountCeiling = 48;
var AMNTofPlayers = defaultPlayers;

//Arrays related to teams
var teamNumberExists = [];
var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];

//Non-static variables related to teams
var teamsExist = false;
var maxMaxTeamSize = int(AMNTofPlayers / 4);
var maxTeamSize = defaultMaxTeamSize;
var maxTeamLimit = int(AMNTofPlayers / maxMaxTeamSize);
