const input = document.querySelector(".sign-in form input");
const submitBtn = document.querySelector(".sign-in form button");
const emailError = document.querySelector(".email-error");

let emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
submitBtn.addEventListener("click", e => {
	e.preventDefault();
	if (input.value == "") {
		emailError.innerHTML = "Please enter your email";
	} else if (!input.value.match(emailRegex)) {
		emailError.innerHTML = "Please enter a valid email";
	} else {
		emailError.innerHTML = "";
	}
});