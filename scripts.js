// make a board with multi-tiles that are configured to show blank tiles corresponding to a word or phrase
//take user input on letters, parse through the phrase and show the letters on the board
//if you guess wrong, the next player gets to try.
//make multiple users at the beginning into objects. make correct answer value equivalent to a static num
//which will multiply by the number of correct guessed letters in the phrase.
//create an array of words/phrases to iterate through for each round.
//create a teacher's ui

function mainObj(){
	this.puzzlearray=[];
	this.createPuzzle=createPuzzle;
	this.tile=[];
	this.wordspaces=[];
	this.letters=[];
	var obj=this;
	this.emptytile=[];
	


	function createPuzzle(phrase){
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
		if(numberletters<=14){
			// console.log(numberletters)
			for(var i=0;i<numberletters;i++){
				if(obj.letters[i]!=" "){
				obj.emptytile[i+12].classList.remove("tile")
				obj.emptytile[i+12].classList.add("emptytile")
			}
				obj.tile[i+12].innerHTML=obj.letters[i];
			}
		}
	}
	document.addEventListener("keypress", function(event){
		CheckForLetter(event.key);
	})
	function CheckForLetter(letter){
		for(var i=0;i<obj.tile.length;i++){
			if(obj.tile[i].innerHTML===letter){
				obj.tile[i].classList.add("correct-letter");
				obj.tile[i].classList.remove("hiddentile")
			}
		}
	}
}
var tile=document.getElementsByClassName("tile")
var newobj= new mainObj();
for(var i=0;i<tile.length;i++){
	var newtile=document.createElement("div")
	newtile.classList.add("hiddentile")
	tile[i].appendChild(newtile)
	newobj.tile.push(newtile)
	newobj.emptytile.push(tile[i])
}
