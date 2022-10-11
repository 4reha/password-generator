const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passEL = document.getElementById("pass");
let msgEL = document.getElementById("msg");

function getRandom()	{
	return (Math.floor(Math.random()*90) + 1)
}


function generate()	{
	let pass = "";
	for (let i = 0; i < 15; i++) {
		pass += characters[getRandom()]
	}
	passEL.textContent = pass;
	msgEL.textContent = "";
}

function copyFunc()	{
	if (passEL.textContent != "")	{
		navigator.clipboard.writeText(passEL.textContent);
		msgEL.textContent = "password has been copied succussfully!";
	}
}