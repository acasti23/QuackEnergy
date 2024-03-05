$(document).ready(function () {
    var taskNum = 1;
    const submitBTN = document.querySelector('#submit-button');
    var PasswordField = document.getElementById('password-input');
    var duckIcon = document.getElementById('duck-icon');

    submitBTN.addEventListener('click', function () {
        var UserIn = PasswordField.value;
        if (taskNum == 1) {
            if (UserIn.toLowerCase() == "latina completion and transfer academy"||UserIn.toLowerCase() == "latina completion & transfer academy") {//Enginnering Club
                alert("Great Job");
                PasswordField.value = "";
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('task-num').innerText = "2 Engineering Club";
                document.getElementById('task-desc').innerText = "What does UAV stand for?";
                duckIcon.src = 'Images/Task2_Complete.elac.png';//Changes Image
                taskNum++;
                console.log(taskNum);
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 2) {//Veteran Club
            if (UserIn.toLowerCase() == "unmanned aerial vehicle" ) {
                alert("Great Job");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.getElementById('task-num').innerText = "3 Veteran's Club";
                document.getElementById('task-desc').innerText = "Where is the Veteran Resource Center Located";
                duckIcon.src = 'Images/Task3_Complete.elac.png';//Changes Image
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
                document.getElementById('task-desc').innerText = "What was the last Hack-a-ton we attended";
                duckIcon.src = 'Images/Task3_Complete.elac.png';//Changes Image
                PasswordField.value = "";
                taskNum++;
            } else {
                alert("Try Again");
            }
        } else if (taskNum == 4) { 
            if (UserIn.toLowerCase() == "athenahacks" || UserIn.toLowerCase() == "athena hacks") {
                window.location.href = 'end.html';
                
            } else {
                alert("Try Again");
            }
        }
    });
});