emailInput = document.getElementById("email")
errorMessage = document.getElementById("errorMsg")
submitButton = document.getElementById("submitBtn")


function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email)
}

submitButton.addEventListener('click', function(e) {

    //prevent the browser's default behaviour
    e.preventDefault();

    //get the email value and remove white spaces
    const emailValue = emailInput.value.trim()

    //If email doesnt pass, display error msg
    if(!validateEmail(emailValue)) {
        emailInput.style.border = "2px solid red";
        errorMessage.style.color = 'red'
        errorMessage.textContent = "Invalid Email"
    }
    else{
        localStorage.setItem("subscribedEmail", emailValue)
        window.location.href = 'success.html'
    }
    
    //if email passes, link to success page



})