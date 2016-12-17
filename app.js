
	var pos = 0, test, testStatus, question, choice, choices, chA, chB, chC, chD, correct = 0;
	var questions = [
			["How many yoga poses are in a Sun Salutation?", 3, 5, 9, 8, "D"],
			["Which one of these are NOT one of the Yamas?", "Ahimsa", "Shaucha", "Asteya", "Aparigraha", "B"],
			["How many Chakras are within the body?", 16, 22, 7, 5, "C"],
			["What is the definition of Prana?", "Breath, the life force of the body.", "The movement of yoga", "A type of meditation", "None of the above", "A"]
		];
	function getId(x){
		return document.getElementById(x);
	}
	function renderQuestion(){
		test = getId("test");
		if(pos >= questions.length){
			test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct</h2>";			
			getId("testStatus").innerHTML = "Test is Complete!";
			pos = 0;
			correct = 0;
			return false;
		}
 
		getId("testStatus").innerHTML = "Question " + (pos+1) + " of "+ questions.length;
		question = questions[pos][0];
		chA = questions[pos][1];
		chB = questions[pos][2];
		chC = questions[pos][3];
		chD = questions[pos][4];
		test.innerHTML = "<h3>" + question + "</h3>";
		test.innerHTML += "<input type='radio' name='choices' value='A'> " + chA + "<br>";
		test.innerHTML += "<input type='radio' name='choices' value='B'> " + chB + "<br>";
		test.innerHTML += "<input type='radio' name='choices' value='C'> " + chC + "<br>";
		test.innerHTML += "<input type='radio' name='choices' value='D'> " + chD + "<br><br>";
		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
		}
	function checkAnswer() {
		choices = document.getElementsByName('choices');
		for (var i = 0; i < choices.length; i++) {
			if (choices[i].checked){
				choice = choices[i].value;
			}
		}
		if(choice === questions[pos][5]){
			correct++;
		}
		pos++;
		renderQuestion();
	};

window.addEventListener('load', renderQuestion, false);
