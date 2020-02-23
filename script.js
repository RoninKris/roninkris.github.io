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
	else document.querySelector("#login-li").innerHTML = "LOG IN";
	
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
	const accounts = [
	["Admin", "Ronin", "Jhane"],
	["admin123", "Password", "Password05"]
	];

	if(loginForm.username.value == null || loginForm.username.value == ""){
		document.querySelector("#username-span").innerHTML = "Username cannot be blank";
		document.querySelector("#username-box").style.border = "2px solid red";
		return false;
	}
	else if(loginForm.password.value == null || loginForm.password.value == ""){
		document.querySelector("#password-span").innerHTML = "Password cannot be blank";
		document.querySelector("#password-box").style.border = "2px solid red";
		return false;
	}
	else if(loginForm.username.value == accounts[0][0] && loginForm.password.value == accounts[1][0]){
			document.querySelector("#login-li").innerHTML = "LOG OUT";
			HideLogin();
			loggedIn = true;
			return false
	}
	else if(loginForm.username.value == accounts[0][1] && loginForm.password.value == accounts[1][1]){
			document.querySelector("#login-li").innerHTML = "LOG OUT";
			HideLogin();
			loggedIn = true;
			return false
	}
	else if(loginForm.username.value == accounts[0][2] && loginForm.password.value == accounts[1][2]){
			document.querySelector("#login-li").innerHTML = "LOG OUT";
			HideLogin();
			loggedIn = true;
			return false
	}
	else{
		alert(accounts[0][0] + " " + accounts[1][0]);
		return false;
	}
}