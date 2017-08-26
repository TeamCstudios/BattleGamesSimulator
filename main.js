//Defaults
var defaultPlayers = 24;
var defaultMaxTeamSize = 6;

//Player names array
var playerNames = [];

//Other player-related arrays
var playersAlive = [];
var playerPersonalityStatus = [];
var playerPhysicalStatus = [];
var playerMentalStatus = [];

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

//This function initializes arrays, and will be run after the player count is changed
function initializeArrays(){
  	for(var i = 0; i < AMNTofPlayers; i++){
    		playerNames.push(0);
    		playersAlive.push(0);
    		playerPersonalityStatus.push(0);
    		playerPhysicalStatus.push(0);
    		playerMentalStatus.push(0);
  	}
	maxMaxTeamSize = int(AMNTofPlayers / 4);
	maxTeamLimit = int(AMNTofPlayers / maxMaxTeamSize);
	
}

//Checks if a certain array contains something
function arrayContains(array,value){
	for(var i = 0; i < array.length; i++){
		var cur = array[i];
		if(cur = value){
			return true;
		}
	}
}

//toggles whether teams exist or not.
function toggleTeams(){
	if(teamsExist){
		teamsExist = false;
		document.getElementById("toggleteamsbutton").textContent = "Enable Teams";
	}else{
		teamsExist = true;
		document.getElementById("toggleteamsbutton").textContent = "Disable Teams";
	}
}

//Changes the player count
function changePlayerCount(){
	if(AMNTofPlayers != 48) {
		AMNTofPlayers = AMNTofPlayers + 8;
	} else {
		AMNTofPlayers = 8;
	}
	document.getElementById("playercountbutton").textContent = AMNTofPlayers + " Players";
}
