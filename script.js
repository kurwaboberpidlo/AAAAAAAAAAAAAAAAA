let timer;
let numbers = [];

function startExercise() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('number-table').style.display = 'table';

    timer = setTimeout(function(){
        document.getElementById('number-table').style.display = 'none';
        document.getElementById('user-input').style.display = 'block';
    }, 20000);
}

function checkResults() {
    let userInput = document.getElementById('numbers-input').value;
    let userNumbers = userInput.split(' ').map(Number);
    let correctCount = 0;

    userNumbers.forEach(function(number){
        if(numbers.includes(number)) {
            correctCount++;
        }
    });

    let analysis = "Плохая";
    if(correctCount >= 7) {
        analysis = "Норма";
    } else if(correctCount >= 4) {
        analysis = "Средняя";
    }

    document.getElementById('result').innerText = 'Ваш результат: ' + analysis;
}

window.onload = function() {
    numbers = [13, 91, 47, 39, 65, 83, 19, 51, 23, 94, 71, 87, 55, 67, 81, 24];
};