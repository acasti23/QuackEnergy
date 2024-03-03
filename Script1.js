$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;

        if (taskNum == 1) {
            if (UserIn == "24 times") {
                document.getElementById('task-num').innerText = "#2 - I still need clothes";
                document.getElementById('task-desc').innerText = "What foods does a duck prefer eating with soup?";
                Task1.src = 'Images/Task1_icon.png';
                duckIcon.src = 'Images/Task1_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 2) {
            if (UserIn == "Quackers") {
                document.getElementById('task-num').innerText = "#3 - Don't forget my laptop";
                document.getElementById('task-desc').innerText = "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?";
                Task2.src = 'Images/Task2_icon.png';
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 3) {
            if (UserIn == "Sleep Room") {
                window.location.href = '/end.html';
            } else {
                alert("Try Again");
            }
        }
    });
});
