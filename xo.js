container = document.getElementById('container')
let count = 0;
let countTimes = 0;
let stopGame = false;
let i = 0; let j;
for (; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        let button = document.createElement('button');
        console.log(button);
        // button.textContent = count;
        button.id = count;
        container.appendChild(button);
        button.classList.add('glow');
        button.onclick = () => (PlayGame(button))
        count++;
    }
}
//לוגיקת המשחק
//יצירת ה x
function PlayGame(button) {

  
    if (stopGame === true) {
        resetGame();
        // alert(`${winer()} wins`)
        Swal.fire({
            title: `${winner} Wins!`,
            text: 'Congratulations!',
            icon: 'success',
            background: '#000000',
            color: '#ffffff',
            confirmButtonText: 'Play Again',
            confirmButtonColor: '#ff414d',
            customClass: {
                popup: 'fireworks-popup'
            }
        }).then(() => {
            resetGame(); // אתחול המשחק לאחר סיום
        });
        return;
    }
    else if (button.textContent === 'x' || button.textContent === 'o') {
        return;
    }
    console.log(countTimes);

    if (countTimes % 2 === 0 && !(button.textContent === 'x' || button.textContent === 'y')) {

        countTimes++;
        button.textContent = 'o';
        button.classList.add('clicked-o');
        
    }
    else {

        countTimes++;
        button.textContent = 'x';
        button.classList.add('clicked-x');
    }
    console.log(winer());

    winer();
    debugger
    const currentWinner = winer();
    if (currentWinner != null) {
        stopGame = true;
        Swal.fire({
            title: `${currentWinner} Wins!`, 
            text: 'Congratulations!',
            icon: 'success',
            background: '#000000',
            color: '#ffffff',
            confirmButtonText: 'Play Again',
            confirmButtonColor: '#ff414d',
            customClass: {
                popup: 'fireworks-popup'
            }
        }).then(() => {
            resetGame(); // אתחול המשחק לאחר סיום
        });
        
        // alert(`${winer()} wins`)
        return;
    }

}
//בדיקת ניצחון
function winer(button) {
    let buttons = document.querySelectorAll('button')
    //שורה ראשונה
    if (buttons[0].textContent === 'o' && buttons[1].textContent === 'o' && buttons[2].textContent === 'o')
        return buttons[0].textContent;
    else if (buttons[0].textContent === 'x' && buttons[1].textContent === 'x' && buttons[2].textContent === 'x')
        return buttons[0].textContent;
    //שורה שניה
    else if (buttons[3].textContent === 'o' && buttons[4].textContent === 'o' && buttons[5].textContent === 'o')
        return buttons[3].textContent;
    else if (buttons[3].textContent === 'x' && buttons[4].textContent === 'x' && buttons[5].textContent === 'x')
        return buttons[3].textContent;
    //שורה שלישית
    else if (buttons[6].textContent === 'o' && buttons[7].textContent === 'o' && buttons[8].textContent === 'o')
        return buttons[6].textContent;
    else if (buttons[6].textContent === 'x' && buttons[7].textContent === 'x' && buttons[8].textContent === 'x')
        return buttons[6].textContent;
    //עמודה ראשונה
    else if (buttons[0].textContent === 'o' && buttons[3].textContent === 'o' && buttons[6].textContent === 'o')
        return buttons[0].textContent;
    else if (buttons[0].textContent === 'x' && buttons[3].textContent === 'x' && buttons[6].textContent === 'x')
        return buttons[0].textContent;
    //עמודה שניה
    else if (buttons[1].textContent === 'o' && buttons[4].textContent === 'o' && buttons[7].textContent === 'o')
        return buttons[1].textContent;
    else if (buttons[1].textContent === 'x' && buttons[4].textContent === 'x' && buttons[7].textContent === 'x')
        return buttons[1].textContent;
    //עמודה שלישית
    else if (buttons[2].textContent === 'o' && buttons[5].textContent === 'o' && buttons[8].textContent === 'o')
        return buttons[2].textContent;
    else if (buttons[1].textContent === 'x' && buttons[4].textContent === 'x' && buttons[7].textContent === 'x')
        return buttons[2].textContent;
    //אלכסון ראשי
    else if (buttons[0].textContent === 'o' && buttons[4].textContent === 'o' && buttons[8].textContent === 'o')
        return buttons[0].textContent;
    else if (buttons[0].textContent === 'x' && buttons[4].textContent === 'x' && buttons[8].textContent === 'x')
        return buttons[0].textContent;
    //אלכסון משני
    else if (buttons[2].textContent === 'o' && buttons[4].textContent === 'o' && buttons[6].textContent === 'o')
        return buttons[2].textContent;
    else if (buttons[2].textContent === 'o' && buttons[4].textContent === 'o' && buttons[6].textContent === 'o')
        return buttons[2].textContent;
    return null;
}
function resetGame(){
    let buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
      button.textContent = '';
      button.classList.remove('clicked-o', 'clicked-x');
    });
      countTimes = 0;
      stopGame = false;    
}

