
    
    const compDisplay = document.querySelector('.compPlay');
    const compResult = document.createElement('img');
    
    const userDisplay = document.querySelector('.userPlay');
    const userResult = document.createElement('img');

    const compScoreBoard = document.querySelectorAll('.two');
    const compScoreNumber1 = document.createElement('span');
    const compScoreNumber2 = document.createElement('span')

    const userScoreBoard = document.querySelectorAll('.one');
    const userScoreNumber1 = document.createElement('span');
    const userScoreNumber2 = document.createElement('span');

    const body = document.querySelector('body');
    const overlay = document.createElement('div');
    const winner = document. createElement('span')
    winner.classList.add('youWon')
    overlay.classList.add("divvy");

    const startNum = document.querySelectorAll('.startnum');


    const buttons = document.querySelectorAll('button');

    let win = 0;
    let loss = 0;
    
    
    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            startNum.forEach((num) => {
            console.log(num);
            num.remove();
            })
            let robotPick = generateComputerChoice();
            if (button.className == 'Rock'){
                userResult.src = "./Images/Rock_right.svg"
            }
            else if (button.classList == 'Paper'){
                userResult.src = "./Images/Paper_right.svg"
            }
            else {
                userResult.src = "./Images/Scissors_right.svg"
            }
            userDisplay.appendChild(userResult);
            game(button.className, robotPick);
        });
    });


        // randomly returns Rock, Paper, or Scissors 
        function  generateComputerChoice() {
            const rps = ['Rock', 'Paper', 'Scissors'];
            const random = Math.floor(Math.random() * rps.length);
            choice = rps[random];
            if (choice == 'Rock'){
                compResult.src = './images/Rock_left.svg';
            }
            else if (choice == 'Paper') {
                compResult.src = './images/Paper_left.svg';
            }
            else {
                compResult.src = './images/Scissors_left.svg'
            }
            compDisplay.appendChild(compResult);
            return(choice);
        }
        /* compares the users choice and computers choice and declares if the user
        won or lost */
        function decideWinner(userChoice, computerChoice) {
            userChoice = userChoice.toLowerCase();
            computerChoice =computerChoice.toLowerCase();
            let winnerAnnouncement = 'You Won'
            let loserAnnouncement = 'You Lost';
            
            switch (userChoice) {
                case computerChoice:
                    return ('Tie')

                case 'rock':
                    if (computerChoice == 'scissors') {
                        return (winnerAnnouncement);
                    }
                    else {
                        return (loserAnnouncement);
                    }
                
                case 'paper':
                     if (computerChoice == 'rock') {
                        return (winnerAnnouncement);
                    }
                    else {
                        return (loserAnnouncement);
                    }
    
                case 'scissors':
                    if (computerChoice == 'paper') {
                        return (winnerAnnouncement);
                    }
                    else {
                        return (loserAnnouncement);
                    }
            
                
            }
            }

        // Logs the amount of wins and losses for the user in the console

        // function announceScore(win, loss) {
        //         console.log(`Score: ${win} win, ${loss} losses`);
        //     }
        
        /* Loop that makes sure a response of rock, paper, or scissors is given 
        given before breaking*/

        function game(choice, computerChoice) {
            let roundWinner = decideWinner(choice, computerChoice);

                if (roundWinner == 'You Won'){
                    win++;
                }
                else if (roundWinner == 'You Lost') {
                    loss++;    
                    }
                appendMultiple(userScoreBoard, counter = 0, userScoreNumber1, userScoreNumber2, win )

                appendMultiple(compScoreBoard,counter = 0, compScoreNumber1, compScoreNumber2, loss)
               
                if (win == 3){
                    body.appendChild(overlay);
                    winner.textContent = 'You Won!'
                    }
                else if (loss == 3){
                    body.appendChild(overlay);
                    winner.textContent = 'You Lost!'
                    }
                    overlay.appendChild(winner);
                } 
            // Best of 5 game has ended. Notify user if they won or lost
            
            function appendMultiple(nodeList, counter, firstChild, secondChild, textContent) {  nodeList.forEach(        (node) => {
                    if (counter == 0){
                        firstChild.textContent = textContent;
                        node.appendChild(firstChild);
                    }
                    else {
                        secondChild.textContent = textContent;
                        node.appendChild(secondChild)
                    }
                    counter++
                    });
            }

    
