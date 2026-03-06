//TEMPERATURE CONVERTER
function ComputeTemperature(){

	let choice =prompt("Choose Convertor: \n1-Fahrenheit \n2-Celsius");
	if (choice === null) {
		return;
	}
	choice = parseFloat(choice);

	if(isNaN(choice)){
		alert("Invalid input!");
		return;
	}

	if(choice !== 1 && choice !== 2){
		alert("Invalid choice!");
		return;
	}

	let temperature = prompt("Enter Temperature: ");

	if (temperature === null) {
		return;
	}
	temperature = parseFloat(temperature);

    if(isNaN(temperature)){
		alert("Invalid input!");
		return;
	}

	let f;
	let c;

	switch(choice){
		case 1:
			c = (temperature - 32) * 5 / 9;
			alert("Temperature in Celsius: " + c);
			break;

		case 2:
			f = (temperature * 9 / 5) + 32;
			alert("Temperature in Fahrenheit: " + f);
			break;
	}
}


//LONGER WORD
function TheLongerWord(){
	var word1 = prompt("Enter word 1: ").trim();
	if (word1 === null) {
		return;
	}	

	if (!isNaN(word1)) {
   	 	alert("Invalid Input");
		return;
	} 
	
	var word2 = prompt("Enter word 2: ").trim();
	if (word2 === null) {
		return;
	}	

	if (!isNaN(word2)) {
        alert("Invalid Input");
		return;
    }

    if (word1.length > word2.length) {
        alert(word1 + " is the longer word");
    } else if (word2.length > word1.length) {
        alert(word2 + " is the longer word");
    } else {
        alert("Both words have the same length");
    }
}


//BASIC CALCULATOR
function basicCalculator(){

	let num1 =prompt("Enter first number: ").trim();
	if(num1 === null){
		return;
	}	
	num1 = parseFloat(num1);	

	if (isNaN(num1)){
		alert("Invalid input");
		return;
	}

	let num2 = prompt("Enter second number: ").trim();
	if(num2 === null){
		return;
	}	
	num2 = parseFloat(num2);

	if (isNaN(num2)){
		alert("Invalid input");
		return;
	}

	let operator = prompt("Choose Operations: \nA(+) - Addition \nS(-) - Subtraction \nM(*) - Multiplication \nD(/) - Division").trim().toUpperCase();
	if(operator === null){
		return;
	}	

	if (!isNaN(operator)){
		alert("Invalid input");
		return;
	}

    switch(operator){
        case 'A':
        case '+':
            alert(`Sum: ${num1+num2}`);
            break;

        case 'S':
        case "-":
            alert(`Difference: ${num1-num2}`);
            break;

        case 'M':
        case "*":
            alert(`Product: ${num1*num2}`);
            break;

        case 'D':
        case "/":
            if (num2 == 0){
                alert("Error: Division by zero is not allowed.");
            }else{
                alert(`Division: ${num1/num2}`);
            }
            break;

        default:
            alert("Invalid Input");
            break;
    }
}


// BIRTHSTONE
function showUserBirthStone(){
    let birthmonth = prompt("Enter your birth month: ").toLowerCase().trim();
	if (birthmonth === null) {
		return;
	}	
    
	switch(birthmonth){
		case "january":
			alert("Garnet");
			break;
		case "february":
			alert("Amethyst");
			break;
		case "march":
			alert("Aquamarine");
			break;
		case "april":
			alert("Diamond");
			break;
		case "may":
			alert("Emerald");
			break;
		case "june":
			alert("Alexandrite & Pearl");
			break;
		case "july":
			alert("Ruby");
			break;
		case "august":
			alert("Peridot");
			break;
		case "september":
			alert("Sapphire");
			break;
		case "october":
			alert("Opal & Tourmaline");
			break;
		case "november":
			alert("Citrine & Topaz");
			break;
		case "december":
			alert("Blue Zircon, Turquoise & Tanzanite");
			break;
		default:
			alert("Invalid Input");
			break;
	}
}


//ACCELERATION CALCULATOR
function acceleration() {
    let initial = prompt("Enter initial velocity (m/s): ");
	if (initial === null) {
		return;
	}	
	initial = parseFloat(initial);

    if (isNaN(initial)) {
        alert("Please enter valid numeric values.");
        return;
    }

    let final  = prompt("Enter final velocity (m/s): ");
	if (final === null) {
		return;
	}	
	final = parseFloat(final);

    if (isNaN(final)) {
        alert("Please enter valid numeric values.");
        return;
    }

    let time = prompt("Enter change in time (seconds): ");
	if (time === null) {
		return;
	}	
	time = parseFloat(time);	

    if (isNaN(time)) {
        alert("Please enter valid numeric values.");
        return;
    }

    if (time <= 0) {
        alert("Change in time must be greater than zero.");
        return;
    }

    let result = (final - initial) / time;
    alert("Acceleration: " + result);
}


/* HEART TOGGLE */
function toggleLike(element){

element.classList.add("pop");

setTimeout(()=>{
element.classList.remove("pop");
},200);

if(element.textContent=="🤍"){
element.textContent="❤️";
}
else{
element.textContent="🤍";
}

}

/* ADD COMMENT */
function addComment(button){

let commentInput=button.previousElementSibling;
let text=commentInput.value.trim();

if(text!=""){

let list=button.parentElement.querySelector(".comments-list");

let li=document.createElement("li");

li.textContent=text;

list.appendChild(li);

commentInput.value="";

}

}
