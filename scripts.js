
    
    const compDisplay = document.querySelector('.compPlay');
    const compResult = document.createElement('img');
    
    const userDisplay = document.querySelector('.userPlay');
    const userResult = document.createElement('img');

    const compScoreBoard = document.querySelector('.two');
    const compScore = document.createElement('span');
    

    const userScoreBoard = document.querySelector('.one');
    const userScore = document.createElement('span');
    
    const roundAnnouncement = document.querySelector('.roundAnnouncement');
    const announceRound = document.createElement('p');

    const body = document.querySelector('body');
    const overlay = document.createElement('div');
    const winner = document.createElement('span')
    winner.classList.add('youWon')
    overlay.classList.add("divvy");
    const playAgain = document.createElement('button')


    const startNum = document.querySelectorAll('.startnum');
    
    const buttons = document.querySelectorAll('button');

    let win = 0;
    let loss = 0;
    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            startNum.forEach((num) => {
            num.remove();
            })
            let robotPick = generateComputerChoice();
            if (button.className == 'Rock'){
                userResult.src = "./Images/Rock_right.svg"
            }
            else if (button.className == 'Paper'){
                userResult.src = "./Images/Paper_right.svg"
            }
            else {
                userResult.src = "./Images/Scissors_right.svg"
            }
            userDisplay.appendChild(userResult);
            game(button.className, robotPick);
        });
    });

        function  generateComputerChoice() {
            const rps = ['Rock', 'Paper', 'Scissors'];
            const random = Math.floor(Math.random() * rps.length);
            choice = rps[random];
            if (choice == 'Rock'){
                compResult.src = './Images/Rock_left.svg';
            }
            else if (choice == 'Paper') {
                compResult.src = './Images/Paper_left.svg';
            }
            else {
                compResult.src = './Images/Scissors_left.svg'
            }
            compDisplay.appendChild(compResult);
            return(choice);
        }

        function decideWinner(userChoice, computerChoice) {
            let winnerAnnouncement = (`You Win! ${userChoice} beats ${computerChoice}!`);1
            let loserAnnouncement = (`You Loose ${computerChoice} beats ${userChoice}!`);
            
            switch (userChoice) {
                case computerChoice:
                    return (`Tie! You both played ${userChoice}.`);

                case 'Rock':
                    if (computerChoice == 'Scissors') {
                        return (winnerAnnouncement);
                    }
                    else {
                        return (loserAnnouncement);
                    }
                
                case 'Paper':
                     if (computerChoice == 'Rock') {
                        return (winnerAnnouncement);
                    }
                    else {
                        return (loserAnnouncement);
                    }
                   
                case 'Scissors':
                    if (computerChoice == 'Rock') {
                        return (loserAnnouncement);
                    }
                    else {
                        return (winnerAnnouncement);
                    }
                    
                
            }
        }

        function game(choice, computerChoice) {
            let roundWinner = decideWinner(choice, computerChoice);

                if (roundWinner.search('Win') > -1){
                    win++;
                }
                else if (roundWinner.search('Loose') > -1) {
                    loss++;    
                    }
                announceRound.textContent = roundWinner;
                roundAnnouncement.appendChild(announceRound)
                userScore.textContent = win;
                userScoreBoard.appendChild(userScore);
                
                compScore.textContent = loss;
                compScoreBoard.appendChild(compScore)
               
                if (win == 3){
                    restart('win')
                    }
                else if (loss == 3){
                    restart('loose')
                } }

        function restart(result){
            body.appendChild(overlay);
            if (result == 'win'){
                winner.textContent = 'You Won!'
            }
            else {
                winner.textContent = 'You Lost!'
            }
            overlay.appendChild(winner)
            playAgain.textContent = 'Play Again?'
            overlay.appendChild(playAgain)
            playAgain.addEventListener('click', function() {
            win = 0;
            loss = 0;
            compScore.textContent = loss, userScore.textContent = win;
            compScoreBoard.appendChild(compScore);
            userScoreBoard.appendChild(userScore)
            overlay.remove();
            announceRound.remove();
            })
        }