 let space, counter, upBar;
 let list = [];
 let current;
 let canBeClicked;
 
 window.onload = function() {
	space = document.getElementById("flashcard-container");
	counter = document.getElementById("counter");
	upBar = document.getElementById("bar-counter-upper");
	upBar.style["background-color"] = "#AAEEAA";
	resetList();

	grabWord();

	space.onclick = function() {
		if (canBeClicked) {
			canBeClicked = false;
			setWord(current.lj + ": " + current.en);
			setTimeout(grabWord, 2000);
		}
	}
 }
 
 function setWord(word) {
	space.innerHTML = "<p>" + word + "</p>";
 }
 
 function resetList() {
	list = [];
	for(let i = 0; i < data.length; i++) {
		list[i] = i;
	}
	space.onclick = function() {
		if (canBeClicked) {
			canBeClicked = false;
			setWord(current.lj + ": " + current.en);
			setTimeout(grabWord, 2000);
		}
	}
 }
 
 function grabWord() {
	if (list.length <= 0) {
		setWord("Finished!  Restart?");
		counter.innerHTML = data.length + "/" + data.length;
		upBar.style.width = "100%";
		space.onclick = function() {
			resetList();
			grabWord();
		};
	} else {
		let index = Math.floor(Math.random() * list.length);
		current = data[list[index]];
		list.splice(index, 1);
		
		updateCounter();
		setWord(current.lj);
		canBeClicked = true;
	}
 }
 
 function updateCounter() {
	counter.innerHTML = ((data.length - list.length) - 1) + "/" + data.length;
	upBar.style.width = Math.floor((((data.length - list.length) - 1) / data.length) * 100) + "%";
 }