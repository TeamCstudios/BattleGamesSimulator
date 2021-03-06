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
var playerChecked = [];
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

//Buttons
var optionstoggled = true;

//Time
var cycle = 1;

/* These functions handle game settings.
These are usually tied to buttons. */

//Startup Script
function startup() {
  toggleOptions();
}

//Toggle Buttons Toggle W h a t
function toggleOptions() {
  var toggleteamsbutton = document.getElementById("toggleteamsbutton");
  var playercountbutton = document.getElementById("playercountbutton");
  var gamespeedbutton = document.getElementById("gamespeedbutton");
  var teamsizebutton = document.getElementById("teamsizebutton");
  if (optionstoggled == true) {
    toggleteamsbutton.style.display = "none";
    playercountbutton.style.display = "none";
    gamespeedbutton.style.display = "none";
    teamsizebutton.style.display = "none";
    optionstoggled = false;
  } else {
    toggleteamsbutton.style.display = "inline";
    playercountbutton.style.display = "inline";
    gamespeedbutton.style.display = "inline";
    teamsizebutton.style.display = "inline";
    optionstoggled = true;
  }
}

//Toggles whether teams exist or not.
function toggleTeams() {
  if (teamsExist) {
    teamsExist = false;
    document.getElementById("toggleteamsbutton").textContent = "Enable Teams";
  } else {
    teamsExist = true;
    document.getElementById("toggleteamsbutton").textContent = "Disable Teams";
  }
}

//Changes the player count
function changePlayerCount() {
  if (AMNTofPlayers != 48) {
    AMNTofPlayers = AMNTofPlayers + 8;
  } else {
    AMNTofPlayers = 8;
  }
  document.getElementById("playercountbutton").textContent = AMNTofPlayers + " Players";
  initializePlayerArrays();
}

//Changes the game speed
function changeGameSpeed() {
  if (gameSpeed != 5) {
    gameSpeed = gameSpeed + 1;
  } else {
    gameSpeed = 1;
  }
  document.getElementById("gamespeedbutton").textContent = gameSpeed + " Game Speed";
}

//Changes the max team size
function changeMaxTeamSize() {
  if (maxTeamSize < 8) {
    maxTeamSize = maxTeamSize + 1;
  } else {
    maxTeamSize = 2;
  }
  document.getElementById("teamsizebutton").textContent = maxTeamSize + " Max Team Size";
  initializeTeamArrays();
}


/* These functions are functionality functions.
They account for common processes. */

//Checks if a certain array contains something
function arrayContains(array, value) {
  for (var i = 0; i < array.length; i++) {
    var cur = array[i];
    if (cur = value) {
      return true;
    }
  }
}

//This function writes text to whatever element you want.
function writeTo(element, text) {
  document.getElementById(element).innerHTML = text;
}

//This function initializes arrays, and will be run after the player count is changed
function initializePlayerArrays() {
  playerNames = [];
  playersAlive = [];
  playerPersonalityStatus = [];
  playerPhysicalStatus = [];
  playerMentalStatus = [];
  playerChecked = [];
  for (var i = 0; i < AMNTofPlayers; i++) {
    playerNames.push(0);
    playersAlive.push(0);
    playerPersonalityStatus.push(0);
    playerPhysicalStatus.push(0);
    playerMentalStatus.push(0);
    playerChecked.push(0);
  }
  maxMaxTeamSize = int(AMNTofPlayers / 4);
  maxTeamLimit = int(AMNTofPlayers / maxMaxTeamSize);

}

function initializeTeamArrays() {
  team1 = [];
  team2 = [];
  team3 = [];
  team4 = [];
  teamNumberExists = [];
  for (var i = 0; i < maxTeamSize; i++) {
    team1.push(0);
    team2.push(0);
    team3.push(0);
    team4.push(0);
  }
  for (var i = 0; i < 4; i++) {
    teamNumberExists.push(0);
  }
}


//This function handles the player naming.
function namePlayers() {
  for (var i = 0; i < AMNTofPlayers; i++) {
    var pid = i + 1;
    playerNames[i] = prompt("Name player " + pid + ".", "Name");
    playersAlive[i] = 1;
    playerPersonalityStatus[i] = Math.floor(Math.random() * 10) + 1;
    playerPhysicalStatus[i] = 0;
    playerMentalStatus[i] = 0;
  }
  var toggleOptionsButton = document.getElementById("toggleoptions");
  nameplayersbutton.style.display = "none";
  toggleOptionsButton.style.display = "none";
  if (optionstoggled == true) {
    toggleOptions();
  }
  writeTo("paragraph0","");
  writeTo("paragraph1","");
}

//This function should check each player and make sure they have an event each day.
function playerEventChecker() {
  for (var i = 0; i < AMNTofPlayers; i++) {
    playerChecked.push(1);
  }
  for (var i = 0; i < AMNTofPlayers; i++) {
    var playerid = i;
    var playerAlive = playerAlive[playerid];
    if (cycle % 2 == 1) {
      if (Math.floor(Math.random() * 10) + gameSpeed >= 8) {
        violentDayEvent(playerid);
      } else {
        peacefulDayEvent(playerid);
      }
    } else {
      if (Math.floor(Math.random() * 10) + gameSpeed >= 8) {
        violentNightEvent(playerid);
      } else {
        peacefulNightEvent(playerid);
      }
    }
  }
  cycle++;
}

//This runs a peaceful daytime event, possibly including alliances.
function peacefulDayEvent(id) {

}

//This runs a violent daytime event, resulting in at least one death.
function violentDayEvent(id) {

}

//This runs a peaceful nighttime event, possibly including alliances.
function peacefulNightEvent(id) {

}

//This runs a violent nighttime event, resulting in at least one death.
function violentNightEvent(id) {

}
