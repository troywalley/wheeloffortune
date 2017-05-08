// make a board with multi-tiles that are configured to show blank tiles corresponding to a word or phrase
//take user input on letters, parse through the phrase and show the letters on the board
//if you guess wrong, the next player gets to try.
//make multiple users at the beginning into objects. make correct answer value equivalent to a static num
//which will multiply by the number of correct guessed letters in the phrase.
//create an array of words/phrases to iterate through for each round.
//create a teacher's ui
var tile=document.getElementsByClassName("tile")
var newobj= new mainObj();
for(var i=0;i<tile.length;i++){
	var newtile=document.createElement("div")
	newtile.classList.add("hiddentile")
	tile[i].appendChild(newtile)
	newobj.tile.push(newtile)
	newobj.emptytile.push(tile[i])
}
var array=["PHANTOM OF THE OPERA", "AMPHIBIAN", "BARACK OBAMA", "MUHAMMAD ALI", "BEN FRANKLIN", "THE SHAWSHANK REDEMPTION", "TO KILL A MOCKINGBIRD", "DALLAS COWBOYS", "OZZY OSBOURNE"]
var clue=["Entertainment", "Thing", "People", "People", "People", "Entertainment","Arts and Culture", "Thing", "People"]
newobj.puzzlearray=array;
newobj.cluearray=clue;
newobj.Start();
function mainObj(){
	this.puzzlearray=[];
	this.cluearray=[];
	this.puzzleindex=0;
	this.createPuzzle=createPuzzle;
	this.tile=[];
	this.wordspaces=[];
	this.letters=[];
	var obj=this;
	this.emptytile=[];
	this.line1=0;
	this.line2=0;
	this.line3=0;
	this.line4=0;
	this.line1done=false;
	this.line2done=true;
	this.line3done=true;
	this.line4done=true;
	this.clearAll=clearAll;
	this.solvePuzzle=solvePuzzle;
	this.CreatePlayers=CreatePlayers;
	this.PlayerLoop=PlayerLoop;
	this.players=[];
	this.currentplayer=0;
	this.points=100;
	this.scorecard=[];
	this.usedletters=[];
	this.header=[];
	this.playerarray=[];
	this.phrase=[];
	this.wheelarray=["wheel1", "wheel2", "wheel3", "wheel4", "wheel5", "wheel6", "wheel7", "wheel8", "wheel9", "wheel10", "wheel11", "wheel12", "wheel13", "wheel14", "wheel15", "wheel16", "wheel17", "wheel18", "wheel19", "wheel20", "wheel21", "wheel22", "wheel23", "wheel24",]
	this.Start=Start;
	this.withoutspaces=0;
	this.guessedcorrect=0;
	this.pointsarray=[800,200,250,300,200,"LAT",600,250,400,300,200,"BKRT",250,350,500,250,200,300,400,250,350,300,200,"BKRT"];
	var modal=document.getElementsByClassName("wheelmodal")[0];
	var clue=document.getElementsByClassName("clue")[0];
	var players=document.getElementsByClassName("players")[0];
	var wheelpoints=document.getElementsByClassName("temppoints")[0];
	var modalplayer=document.getElementsByClassName("modalplayer")[0];
	function Start(){
		var people=prompt("Enter the number of players");
		if(people===""||people===null){
			return;
		}else{

			obj.PlayerLoop(parseInt(people))
		}
		clue.innerHTML=obj.cluearray[0]
		obj.createPuzzle(obj.puzzlearray[0]);
		
		
		var wheel=document.getElementsByClassName("wheel")[0];
		setTimeout(function(){modal.style.display="block";spinWheel()},1000);
	}
	function PlayerLoop(number){
		
		for(var i=0;i<number;i++){
			var player=new obj.CreatePlayers();
			obj.players.push(player);
			obj.playerarray.push(i);
		}
		if(number===1){
			var scorecard=document.createElement("div")
			scorecard.classList.add("players1")
			players.append(scorecard);
			var playerheader=document.createElement("div")
			playerheader.classList.add("playerheader1")
			scorecard.append(playerheader)
			playerheader.innerHTML="Player 1"
			var mypoints=document.createElement("div")
			mypoints.classList.add("mypoints")
			scorecard.append(mypoints)
			mypoints.innerHTML=0;
			obj.scorecard.push(mypoints);
			obj.header.push(playerheader);
		}
		if(number===2){
				var scorecard=document.createElement("div")
				var scorecard2=document.createElement("div")
			scorecard.classList.add("players1")
			scorecard2.classList.add("players1")
			players.append(scorecard);
			players.append(scorecard2);
			var playerheader=document.createElement("div")
			playerheader.classList.add("playerheader1")
			scorecard.append(playerheader)
			var playerheader2=document.createElement("div")
			playerheader2.classList.add("playerheader2")
			scorecard2.append(playerheader2)
			playerheader.innerHTML="Player 1"
			playerheader2.innerHTML="Player 2"
			var mypoints=document.createElement("div")
			mypoints.classList.add("mypoints")
			scorecard.append(mypoints)
			mypoints.innerHTML=0;
			var mypoints2=document.createElement("div")
			mypoints2.classList.add("mypoints")
			scorecard2.append(mypoints2)
			mypoints2.innerHTML=0;
			obj.scorecard.push(mypoints);
			obj.scorecard.push(mypoints2);
			obj.header.push(playerheader);
			obj.header.push(playerheader2);
		}
		if(number>=3){
				var scorecard=document.createElement("div")
				var scorecard2=document.createElement("div")
				var scorecard3=document.createElement("div")
			scorecard.classList.add("players1")
			scorecard2.classList.add("players1")
			scorecard3.classList.add("players1")
			players.append(scorecard);
			players.append(scorecard2);
			players.append(scorecard3);
			var playerheader=document.createElement("div")
			playerheader.classList.add("playerheader1")
			scorecard.append(playerheader)
			var playerheader2=document.createElement("div")
			playerheader2.classList.add("playerheader2")
			scorecard2.append(playerheader2)
			var playerheader3=document.createElement("div")
			playerheader3.classList.add("playerheader3")
			scorecard3.append(playerheader3)
			playerheader.innerHTML="Player 1"
			playerheader2.innerHTML="Player 2"
			playerheader3.innerHTML="Player 3"
			var mypoints=document.createElement("div")
			mypoints.classList.add("mypoints")
			scorecard.append(mypoints)
			mypoints.innerHTML=0;
			var mypoints2=document.createElement("div")
			mypoints2.classList.add("mypoints")
			scorecard2.append(mypoints2)
			mypoints2.innerHTML=0;
			var mypoints3=document.createElement("div")
			mypoints3.classList.add("mypoints")
			scorecard3.append(mypoints3)
			mypoints3.innerHTML=0;
			obj.scorecard.push(mypoints);
			obj.scorecard.push(mypoints2);
			obj.scorecard.push(mypoints3);
			obj.header.push(playerheader);
			obj.header.push(playerheader2);
			obj.header.push(playerheader3);
		}
	}

	function CreatePlayers(){
		this.score=0;
	}
	function createPuzzle(phrase){
		var withoutspaces=phrase.split("")
		for(var i=0;i<withoutspaces.length;i++){
			if(withoutspaces[i]!=" "){
				obj.withoutspaces+=1;
			}
		}
		phrase=phrase.split(" ")
		
		// console.log(phrase.length);
		for(var i=0;i<phrase.length;i++){
			var x=phrase;
			x=x[i].split("")
			obj.wordspaces.push(x.length)
			// console.log(x.length);
			for(var j=0;j<x.length;j++){
				obj.letters.push(x[j])
			}
				obj.wordspaces.push(1)
				obj.letters.push(" ")
			
		}

		var numberletters=0;
		// console.log(obj.wordspaces.length)
		for(var i=0;i<obj.wordspaces.length;i++){
			numberletters+=obj.wordspaces[i];
		}
		figureOutLines();
		if(numberletters<=14){
			// console.log(numberletters)
			for(var i=0;i<numberletters;i++){
				if(obj.letters[i]!=" "){
					obj.phrase.push(i);
					obj.emptytile[i+12].classList.remove("tile")
					obj.emptytile[i+12].classList.add("emptytile")
				}
				obj.tile[i+12].innerHTML=obj.letters[i];
			}
		}else{
			for(var i=0;i<obj.line1;i++){
				obj.tile[i].innerHTML=obj.letters[i];
				if(obj.letters[i]!=" "){
					obj.phrase.push(i);
					// console.log(obj.emptytile[i])
					obj.emptytile[i].classList.remove("tile")
					obj.emptytile[i].classList.add("emptytile")
				}
			}
			
			if(obj.letters.length>obj.line1){
				
				for(var i=0;i<obj.line2;i++){
					obj.tile[i+12].innerHTML=obj.letters[i+obj.line1]
					if(obj.letters[i+obj.line1]!=" "){
						obj.phrase.push(i);
						// console.log(obj.letters[i+12])
						obj.emptytile[i+12].classList.remove("tile")
						obj.emptytile[i+12].classList.add("emptytile")
					}
				}
			}
			if(obj.letters.length>obj.line1+obj.line2){
				
				for(var i=0;i<obj.line3;i++){
					obj.tile[i+26].innerHTML=obj.letters[i+obj.line1+obj.line2]
					if(obj.letters[i+obj.line1+obj.line2]!=" "){
						obj.phrase.push(i);
						obj.emptytile[i+26].classList.remove("tile")
						obj.emptytile[i+26].classList.add("emptytile")
					}
				}
			}
			if(obj.letters.length>obj.line1+obj.line2+obj.line3){
				
				for(var i=0;i<obj.line4;i++){
					obj.tile[i+40].innerHTML=obj.letters[i+obj.line1+obj.line2+obj.line3]
					if(obj.letters[i+40]!=" "){
						obj.phrase.push(i);
						obj.emptytile[i+40].classList.remove("tile")
						obj.emptytile[i+40].classList.add("emptytile")
					}
				}
			}
		}
	}
	document.addEventListener("keypress", function(event){
		CheckForLetter(event.key);
	})

	document.addEventListener("keydown", Solve)
	function Solve(event){
		if(event.key==="Escape"){
			var puzzleanswer=prompt("Would you like to solve the puzzle?")
			if(puzzleanswer!=""&&puzzleanswer!=null){
				solvePuzzle(puzzleanswer.toUpperCase())
			}else{
				return;
			}
		}
	}
	function solvePuzzle(string){
		string=string.toUpperCase();
		if(string+" "===obj.letters.join("")){
			alert("You have solved the puzzle!!!")
			obj.players[obj.playerarray[0]].score+=(obj.points*(obj.withoutspaces-obj.guessedcorrect));
			obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
			obj.clearAll();
			obj.puzzleindex+=1;
			clue.innerHTML=obj.cluearray[obj.puzzleindex]
		obj.createPuzzle(obj.puzzlearray[obj.puzzleindex]);
		setTimeout(function(){modal.style.display="block";spinWheel()},2000);
		}else{
			alert("You have guessed incorrectly.")
		}
	}
	function figureOutLines(){
		for(var i=0; i<obj.wordspaces.length;i++){
			if(obj.line1done===false){
				if(obj.line1+obj.wordspaces[i]<=12){
					obj.line1+=obj.wordspaces[i];

				}else{
					obj.line1done=true;
					obj.line2done=false;
				}
			}
			if(obj.line2done===false){
				if(obj.line2+obj.wordspaces[i]<=14){
					obj.line2+=obj.wordspaces[i];
				}else{
					obj.line2done=true;
					obj.line3done=false;
				}
			}
			if(obj.line3done===false){
				if(obj.line3+obj.wordspaces[i]<=14){
					obj.line3+=obj.wordspaces[i];
				}else{
					obj.line3done=true;
					obj.line4done=false;
				}
			}
			if(obj.line4done===false){
				if(obj.line4+obj.wordspaces[i]<=12){
					obj.line4+=obj.wordspaces[i];
				}else{
					alert("This puzzle is too long to fit onto the board.")
					clearAll();
					obj.line4=true;
				}
			}
		}
	}
	function CheckForLetter(letter){
		letter=letter.toUpperCase();
		var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var correctkey=false;
		for(var i=0;i<alphabet.length;i++){
			if(letter===alphabet[i]){
				correctkey=true;
				
			}
		}
		if(correctkey===false){
			return;
		}
		var used=false;
		for(var i=0;i<obj.usedletters.length;i++){
			if(letter===obj.usedletters[i]){
				used=true;
			}
		}
		if(used===true){
			return;
		}
		obj.usedletters.push(letter);
		var guessedcorrect=false;
		for(var i=0;i<obj.tile.length;i++){

			if(obj.tile[i].innerHTML===letter && letter!=" "){
				obj.guessedcorrect+=1;
				obj.tile[i].classList.add("correct-letter");
				obj.tile[i].classList.remove("hiddentile")
				obj.players[obj.playerarray[0]].score+=obj.points;
				console.log(obj.players[obj.currentplayer].score)
				guessedcorrect=true;
				if(obj.playerarray.length>=3){
					obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
					obj.scorecard[1].innerHTML=obj.players[obj.playerarray[1]].score;
					obj.scorecard[2].innerHTML=obj.players[obj.playerarray[2]].score;
				
				}else if(obj.playerarray.length===2){
					obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
					obj.scorecard[1].innerHTML=obj.players[obj.playerarray[1]].score;
				}else{
					obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;	
				}
				}
		}
			if(guessedcorrect===false){	
				wrongGuess();
			}
			isSolved();
			
	}

	function wrongGuess(){
		obj.playerarray.push(obj.playerarray.shift())
		if(obj.playerarray.length>=3){
		
		obj.header[0].innerHTML="Player "+(obj.playerarray[0]+1);
		obj.header[1].innerHTML="Player "+(obj.playerarray[1]+1);
		obj.header[2].innerHTML="Player "+(obj.playerarray[2]+1);
		obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
		obj.scorecard[1].innerHTML=obj.players[obj.playerarray[1]].score;
		obj.scorecard[2].innerHTML=obj.players[obj.playerarray[2]].score;
		}else if(obj.playerarray.length===2){
			obj.header[0].innerHTML="Player "+(obj.playerarray[0]+1);
		obj.header[1].innerHTML="Player "+(obj.playerarray[1]+1);
		obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
		obj.scorecard[1].innerHTML=obj.players[obj.playerarray[1]].score;
		}else{
			obj.header[0].innerHTML="Player "+(obj.playerarray[0]+1);
			obj.scorecard[0].innerHTML=obj.players[obj.playerarray[0]].score;
		}
	}
	function isSolved(){
		var correctletters=document.getElementsByClassName("correct-letter")
		if(correctletters.length===obj.phrase.length){
			alert("puzzle solved")
			obj.clearAll();
			obj.puzzleindex+=1;
			clue.innerHTML=obj.cluearray[obj.puzzleindex]
		obj.createPuzzle(obj.puzzlearray[obj.puzzleindex]);

		}else{
			setTimeout(function(){modal.style.display="block";spinWheel()},2000);
		}
	}
	function spinWheel(){
		modalplayer.innerHTML="Player "+(obj.playerarray[0]+1);
		var wheel=document.getElementsByClassName("wheel")[0]
		var randomValue = Math.floor(obj.wheelarray.length * Math.random());
		console.log(randomValue)
		
		wheel.classList.add(obj.wheelarray[randomValue])
		
		setTimeout(function(){wheel.classList.remove(wheel.classList[1]);modal.style.display="none"},8000)
		if(obj.pointsarray[randomValue]==="LAT"){
			wrongGuess();
			setTimeout(function(){modal.style.display="block";spinWheel()},8000);
		}else if(obj.pointsarray[randomValue]==="BKRT"){
			obj.players[obj.playerarray[0]].score=parseInt(0);
			console.log("Bankrupt")
			wrongGuess();
			setTimeout(function(){modal.style.display="block";spinWheel()},8000);
		}else{
		obj.points=obj.pointsarray[randomValue]
		wheelpoints.innerHTML="$"+obj.points;
		}

	}
	function clearAll(){
		var cleartiles=document.getElementsByClassName("emptytile")
		while(cleartiles.length>0) {
			cleartiles[0].classList.add("tile")
			cleartiles[0].classList.remove("emptytile")
		}
		for(var i=0;i<obj.tile.length;i++){
			obj.tile[i].innerHTML=""
			obj.emptytile[i].removeChild(obj.emptytile[i].lastChild)
		}
		obj.phrase=[];
		obj.line1=0;
		obj.line2=0;
		obj.line3=0;
		obj.line4=0;
		obj.tile=[];
		obj.emptytile=[]
		obj.line1done=false;
		obj.line2done=true;
		obj.line3done=true;
		obj.line4done=true;
		obj.wordspaces=[]
		obj.letters=[]
		var tile=document.getElementsByClassName("tile")
		for(var i=0;i<tile.length;i++){
	var newtile=document.createElement("div")
	newtile.classList.add("hiddentile")
	tile[i].appendChild(newtile)
	newobj.tile.push(newtile)
	newobj.emptytile.push(tile[i])
}
	}
}
