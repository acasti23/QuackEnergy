$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;

        if (taskNum == 1) {
            if (UserIn.toLowerCase() == "e7-210" || UserIn.toLowerCase() == "e7 210") {//Enginnering Club
                alert("Great Job");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('task-num').innerText = "2 Engineering Club";
                document.getElementById('task-desc').innerText = "Where are the meeting hosted";
                Task1.src = 'Images/Task1_icon.png';
                duckIcon.src = 'Images/Task1_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 2) {//Veteran Club
            if (UserIn.toLowerCase() == "e7-101" || UserIn.toLowerCase() == "e7 101") {
                alert("Great Job");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('task-num').innerText = "3 Veteran's Club";
                document.getElementById('task-desc').innerText = "Where is the Veteran Resource Center Located";
                Task2.src = 'Images/Task2_icon.png';
                duckIcon.src = 'Images/Task2_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 3) {//Computer Club
            if (UserIn.toLowerCase() == "d7-a" || UserIn.toLowerCase() == "d7 a") {
                alert("Great Job");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('task-num').innerText = "4 Huskies Computer Club";
                document.getElementById('task-desc').innerText = "Where do they host their meetings";
                Task2.src = 'Images/Task3_icon.png';
                duckIcon.src = 'Images/Task3_Complete.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 4) { 
            if (UserIn.toLowerCase() == "e7-318" || UserIn.toLowerCase() == "e7 318") {
                window.location.href = 'end.html';
                
            } else {
                alert("Try Again");
            }
        }
    });
});