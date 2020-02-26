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
		document.querySelector("#imageHeader").style.filter = "brightness(50%)";
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
	document.querySelector("#imageHeader").style.filter = "brightness(100%)"
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

// Register.html functions
function Register(){
	if(ValidateEmail() && ValidateUsername() && ValidatePassword() && ValidateConfirmPassword()) alert("You are now registered!");
	else{
		document.querySelector("#validator").innerHTML = "Please fill up the forms";
		return false;
	}
}

function ValidateEmail(){
	let form = document.loginForm;
	let emailBox = form.emailRegister;
	let i = 0;
	let atPosition = emailBox.value.indexOf("@");
	let dotPosition = emailBox.value.lastIndexOf(".");
	for(atPosition; atPosition < dotPosition; atPosition++){
		i++;
	}
	if(i == 6 && emailBox.value.includes(".") && emailBox.value.includes("@")){
		emailBox.style.border = "2px solid #3BD43B";
		return true;
	}
	else{
		emailBox.style.border = "2px solid red";
		return false;
	}
}

function ValidateUsername(){
	let form = document.loginForm;
	let usernameBox = form.usernameRegister;
	if(usernameBox.value.length >= 6){
		usernameBox.style.border = "2px solid #3BD43B";
		return true;
	}
	else{
		usernameBox.style.border = "2px solid red";
		return false;
	}
}

function ValidatePassword(){
	let form = document.loginForm;
	let passwordBox = form.passwordRegister;
	if(passwordBox.value.length >= 6){
		passwordBox.style.border = "2px solid #3BD43B";
		return true;
	}
	else{
		passwordBox.style.border = "2px solid red";
		return false;
	}
}

function ValidateConfirmPassword(){
	let form = document.loginForm;
	let passwordBox = form.passwordRegister;
	let confirmPasswordBox = form.confirmPasswordRegister;
	if(passwordBox.value == confirmPasswordBox.value){
		confirmPasswordBox.style.border = "2px solid #3BD43B";
		return true;
	}
	else{
		confirmPasswordBox.style.border = "2px solid #FFC600";
		return false;
	}
}