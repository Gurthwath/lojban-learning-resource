let wordSpace, guess, submit, counter, swap, upBar, midBar;
let list = [];
let current = 0;
let canBeClicked;
let correct;
let lnOne = 'lj';
let lnTwo = 'en';
 
window.onload = function() {
	wordSpace = document.createElement('p');
	document.getElementById("guessing-word").appendChild(wordSpace);
	guess = document.getElementById("guess");
	counter = document.getElementById("counter");
	swap = document.getElementById("ln-swap");
	upBar = document.getElementById("bar-counter-upper");
	midBar = document.getElementById("bar-counter-mid");
	submit = document.getElementById("submit");
	upBar.style["background-color"] = "#AAEEAA";
	midBar.style["background-color"] = "#EEAAAA";
	
	submit.onclick = function() {
		if (canBeClicked) {
			if (guess.value.toLowerCase() == current[lnTwo]) {
				setWord("Correct!");
				correct++;
			} else {
				setWord("Incorrect");
			}
			guess.value = "";
			guess.select();
			setTimeout(grabWord, 2000);
			canBeClicked = false;
		}
	}
	
	swap.onclick = function() {
		let temp = lnOne;
		lnOne = lnTwo;
		lnTwo = temp;
		resetList();
		grabWord();
	}
	
	resetList()
	grabWord();
}
 
function setWord(word) {
	wordSpace.innerHTML = word;
}
 
function resetList() {
	correct = 0;
	wordSpace.onclick = undefined;
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
	} else {
		let index = Math.floor(Math.random() * list.length);
		current = data[list[index]];
		list.splice(index, 1);
		
		updateCounter();
		setWord(current[lnOne]);
		canBeClicked = true;
	}
}

function updateCounter() {
	counter.innerHTML = correct + "/" + data.length;
	midBar.style.width = Math.floor((((data.length - list.length) - 1) / data.length) * 100) + "%";
	upBar.style.width = Math.floor((correct / data.length) * 100) + "%";
}

window.addEventListener('keypress', function(e) {
	if (e.charCode == 13) {
		submit.onclick();
	}
});