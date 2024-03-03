// JavaScript source code
$(document).ready(function () {
    const logInBtn = document.getElementById('submit-button');
    const userNameField = document.getElementById('username-input')
    const passwordField = document.getElementById('password-input')
    logInBtn.addEventListener('click', function () {

        var userName = userNameField.value;
        var password = passwordField.value;
        if (userName == "SuperDucky" && password == "DuckyMomo123") {
            window.location.href = 'instructions.html';
        }
        else {
            alert("Wrong Password");
        }
    });

});