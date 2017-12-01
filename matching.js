let wordSpace, guesses, counter, swap, upBar, midBar;
let list = [];
let current = 0;
let canBeClicked;
let correct;
let lnOne = 'lj';
let lnTwo = 'en';
 
window.onload = function() {
	wordSpace = document.createElement('p');
	document.getElementById("matching-word").appendChild(wordSpace);
	guesses = document.getElementById("matching-guesses");
	counter = document.getElementById("counter");
	swap = document.getElementById("ln-swap");
	upBar = document.getElementById("bar-counter-upper");
	midBar = document.getElementById("bar-counter-mid");
	upBar.style["background-color"] = "#AAEEAA";
	midBar.style["background-color"] = "#EEAAAA";
	
	swap.onclick = function() {
		let temp = lnOne;
		lnOne = lnTwo;
		lnTwo = temp;
		resetList();
		grabWord();
	}
	
	resetList();
	grabWord();
}
 
function setWord(word) {
	wordSpace.innerHTML = word;
}
 
function resetList() {
	correct = 0;
	list = [];
	for(let i = 0; i < data.length; i++) {
		list[i] = i;
	}
}
 
function grabWord() {
	if (list.length <= 0) {
		setWord("Finished!  Restart?");
		counter.innerHTML = correct + "/" + data.length;
		midBar.style.width = "100%";
		upBar.style.width = Math.floor((correct / data.length) * 100) + "%";
		wordSpace.onclick = function() {
			resetList();
			grabWord();
			wordSpace.onclick = null;
		};
		guesses.innerHTML = "";
	} else {
		let index = Math.floor(Math.random() * list.length);
		current = data[list[index]];
		list.splice(index, 1);
		
		updateCounter();
		setWord(current[lnOne]);
		addGuesses();
		canBeClicked = true;
	}
 }

 function addGuesses() {
	guesses.innerHTML = "";
	let guessIndexList = [];
	for(let i = 0; i < data.length; i++) {
		if (data[i][lnOne] !== current[lnOne]) {
			guessIndexList.push(data[i]);
		}
	}
	let guessList = [];
	while (guessIndexList.length > 0 && guessList.length < 3) {
		let index = Math.floor(Math.random() * guessIndexList.length);
		guessList.push(guessIndexList[index]);
		guessIndexList.splice(index, 1);
	}
	guessList.push(current);
	while (guessList.length > 0) {
		let guessDiv = document.createElement("div");
		let index = Math.floor(Math.random() * guessList.length);
		guessDiv.innerHTML = guessList[index][lnTwo];
		guessList.splice(index, 1);
		guessDiv.onclick = function() {
			if (canBeClicked) {
				if (this.innerHTML == current[lnTwo]) {
					setWord("Correct!");
					correct++;
				} else {
					setWord("Incorrect");
				}
				canBeClicked = false;
				setTimeout(function() {
					grabWord();
				}, 2000);
			}
		}
		guesses.appendChild(guessDiv);
	}
}

 function updateCounter() {
	counter.innerHTML = correct + "/" + data.length;
	midBar.style.width = Math.floor((((data.length - list.length) - 1) / data.length) * 100) + "%";
	upBar.style.width = Math.floor((correct / data.length) * 100) + "%";
}