let loginForm = document.loginForm;
let registerForm = document.registerForm;

function validateForm(){ //This function validates the log in forms
	if(loginForm.username.value == "" || loginForm.username.value == null){
		alert("Please enter a username");
		return false;
	}
	else if(loginForm.password.value < 6 && loginForm.username.value != null || loginForm.username.value != ""){
		return true;
	}
}