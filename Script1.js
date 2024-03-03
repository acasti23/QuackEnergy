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
                alert("Wrong Answer");
            }
        } else if (taskNum == 2) {
            if (UserIn == "Quackers") {
                document.getElementById('task-num').innerText = "#3 - Don't forget my laptop";
                document.getElementById('task-desc').innerText = "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?";
                Task2.src = 'Images/Task2_icon.png';
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Wrong Answer");
            }
        } else if (taskNum == 3) {
            if (UserIn == "Three") {
                document.getElementById('task-num').innerText = "Task completed!";
                document.getElementById('task-desc').innerText = "Congratulations!";
                Task3.src = 'Images/Task3_icon.png';
                errorMessage.style.color = "black";
                taskNum++;
            } else {
                errorMessage.style.color = "red";
                alert("Wrong Answer");
            }
        }
    });
});
