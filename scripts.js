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
		figureOutLines();
		if(numberletters<=14){
			// console.log(numberletters)
			for(var i=0;i<numberletters;i++){
				if(obj.letters[i]!=" "){
					obj.emptytile[i+12].classList.remove("tile")
					obj.emptytile[i+12].classList.add("emptytile")
				}
				obj.tile[i+12].innerHTML=obj.letters[i];
			}
		}else{
			for(var i=0;i<obj.line1;i++){
				obj.tile[i].innerHTML=obj.letters[i];
				if(obj.letters[i]!=" "){
					// console.log(obj.emptytile[i])
					obj.emptytile[i].classList.remove("tile")
					obj.emptytile[i].classList.add("emptytile")
				}
			}
			
			if(obj.letters.length>obj.line1){
				
				for(var i=0;i<obj.line2;i++){
					obj.tile[i+12].innerHTML=obj.letters[i+obj.line1]
					if(obj.letters[i+obj.line1]!=" "){
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
						obj.emptytile[i+26].classList.remove("tile")
						obj.emptytile[i+26].classList.add("emptytile")
					}
				}
			}
			if(obj.letters.length>obj.line1+obj.line2+obj.line3){
				
				for(var i=0;i<obj.line4;i++){
					obj.tile[i+40].innerHTML=obj.letters[i+obj.line1+obj.line2+obj.line3]
					if(obj.letters[i+40]!=" "){
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
	function solvePuzzle(){
		console.log(obj.tile)
		console.log(obj.emptytile)
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
		for(var i=0;i<obj.tile.length;i++){
			if(obj.tile[i].innerHTML===letter){
				obj.tile[i].classList.add("correct-letter");
				obj.tile[i].classList.remove("hiddentile")
			}
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
var tile=document.getElementsByClassName("tile")
var newobj= new mainObj();
for(var i=0;i<tile.length;i++){
	var newtile=document.createElement("div")
	newtile.classList.add("hiddentile")
	tile[i].appendChild(newtile)
	newobj.tile.push(newtile)
	newobj.emptytile.push(tile[i])
}
