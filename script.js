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

function ShowNavbar(){
	console.log("Scrolled");
	let navStyle = document.querySelector("nav").style;
	navStyle.backgroundColor = "black";
	navStyle.opacity = "0.5";
}

