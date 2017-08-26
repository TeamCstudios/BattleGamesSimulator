//Constants
var pCountFloor = 8;
var pCountCeiling = 48;
var gameSpeedFloor = 1;
var gameSpeedCeiling = 5;

//Defaults
var defaultPlayers = 24;
var defaultMaxTeamSize = 6;
var defaultScatterSetting = 1;
var defaultGameSpeed = 3;

//Player names array
var playerNames = [];

/* Other player-related arrays
These store each player's statistics */
var playersAlive = [];
//Personality Status effects joining alliances.
var playerPersonalityStatus = [];
//Physical Status effects performance in fights. The higher it is, the more injured a player is.
var playerPhysicalStatus = [];
//Mental Status effects ability to heal, or stay in an alliance.
var playerMentalStatus = [];

//Non-static variables related to game settings
var AMNTofPlayers = defaultPlayers;
var gameSpeed = defaultGameSpeed;
var teamsExist = false;
var maxMaxTeamSize = int(AMNTofPlayers / 4);
var maxTeamSize = defaultMaxTeamSize;
var maxTeamLimit = int(AMNTofPlayers / maxMaxTeamSize);

//Arrays related to teams
var teamNumberExists = [];
var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];

/* These functions handle game settings.
These are usually tied to buttons. */

//Toggles whether teams exist or not.
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
	initializeArrays();
}

//Changes the game speed
function changeGameSpeed(){
	if(gameSpeed != 5) {
		gameSpeed = gameSpeed + 1;
	} else {
		gameSpeed = 5;
	}
	document.getElementById("gamespeedbutton").textContent = gameSpeed + " Game Speed";
}


/* These functions are functionality functions.
They account for common processes. */

//Checks if a certain array contains something
function arrayContains(array,value){
	for(var i = 0; i < array.length; i++){
		var cur = array[i];
		if(cur = value){
			return true;
		}
	}
}

//This function writes text to whatever element you want.
function writeTo(element,text){
	document.getElementById(element).innerHTML = text;
}

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
