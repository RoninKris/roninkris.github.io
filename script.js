let loginForm = document.loginForm;
let registerForm = document.registerForm;

function ValidateForm(){ //This function validates the log in forms
	if(loginForm.username.value == "" || loginForm.username.value == null){
		alert("Please enter a username");
		return false;
	}
	else if(loginForm.password.value < 6 && loginForm.username.value != null || loginForm.username.value != ""){
		return true;
	}
}
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

function ShowLogin(){
	let loginDiv = document.querySelector(".login");
	loginDiv.style.transition = ".5s";
	loginDiv.style.top = "15%";
	return true;
}

function HideLogin(){
	let loginDiv = document.querySelector(".login");
	loginDiv.style.transition = ".5s";
	loginDiv.style.top = "100%";
	return true;
}

