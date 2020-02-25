let shown = false;
function ShowNavbar(){
	if(!shown){
		let navStyle = document.querySelector("nav").style;
		navStyle.backgroundColor = "black";
		navStyle.transition = "0.5s";
		navStyle.opacity = "0.8";
		location.href+="#main";
		shown = true;
	}
}
let loggedIn;
function ShowLogin(){
	if(!loggedIn){
		let loginDiv = document.querySelector(".login");
		loginDiv.style.transition = ".5s";
		loginDiv.style.top = "15%";
	}
	else{
		document.querySelector("#login-li").innerHTML = "LOG IN";
		loggedIn = false;
	}
	
}

function HideLogin(){
	let loginDiv = document.querySelector(".login");
	loginDiv.style.transition = ".5s";
	loginDiv.style.top = "100%";
	document.querySelector("#username-span").innerHTML = "";
	document.querySelector("#username-box").style.border = "none";
	document.querySelector("#username-box").style.borderBottom = "1px solid black";
	document.querySelector("#username-box").value = "";

	document.querySelector("#password-span").innerHTML = "";
	document.querySelector("#password-box").style.border = "none";
	document.querySelector("#password-box").style.borderBottom = "1px solid black";
	document.querySelector("#password-box").value = "";
	//Clear input boxes when hidden
}

function Login(){
	let loginForm = document.loginForm;
	let correct;
	const accounts = [
	["Admin", "Ronin", "Jhane"],
	["admin123", "Password", "Password05"]
	];

	ValidateLoginForm();

	for(var i = 0; i < 3; i++){
		if(loginForm.username.value == accounts[0][i] && loginForm.password.value == accounts[1][i]){
			document.querySelector("#login-li").innerHTML = "LOG OUT";
			HideLogin();
			loggedIn = true;
			correct = true;
			break;
		}
	}
	return false;
}

function ValidateLoginForm(correct){
	if(loginForm.username.value == null || loginForm.username.value == ""){
		document.querySelector("#username-span").innerHTML = "Username cannot be blank";
		document.querySelector("#username-box").style.border = "2px solid red";
	}
	else if(loginForm.password.value == null || loginForm.password.value == ""){
		document.querySelector("#password-span").innerHTML = "Password cannot be blank";
		document.querySelector("#password-box").style.border = "2px solid red";
	}
	//Checks if the forms have values and if the entered username/pass is correct
	else if(loginForm.username.value != null || loginForm.username.value != "" && loginForm.password.value != null || loginForm.password.value != "" && !correct){
		document.querySelector("#username-span").innerHTML = "Username or Password incorrect";
		document.querySelector("#username-box").style.border = "2px solid red";
	}
	else{
		document.querySelector("#username-span").innerHTML = "";
		document.querySelector("#username-box").style.border = "none";
		document.querySelector("#username-box").style.borderBottom = "1px solid black";
		document.querySelector("#password-span").innerHTML = "";
		document.querySelector("#password-box").style.border = "none";
		document.querySelector("#password-box").style.borderBottom = "1px solid black";
	}

	return false;
}

function GotoMenu(){
	window.open("menu.html");
}