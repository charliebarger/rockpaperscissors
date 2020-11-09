    /* target the computers a and user halves of the playfield and create  Images to be appnded to them */

    const compDisplay = document.querySelector('.compPlay');
    const compResult = document.createElement('img');
    
    const userDisplay = document.querySelector('.userPlay');
    const userResult = document.createElement('img');

    /* adjust comp and user scoreboard by appending span elements to them
    */
    const compScoreBoard = document.querySelector('.two');
    const compScore = document.createElement('span');
    
    const userScoreBoard = document.querySelector('.one');
    const userScore = document.createElement('span');
    
    /*create a place for the status of each round to be displayed */

    const roundAnnouncement = document.querySelector('.roundAnnouncement');
    const announceRound = document.createElement('p');

    // create full page overlay 

    const body = document.querySelector('body');
    const overlay = document.createElement('div');
    const winner = document.createElement('span')
    winner.classList.add('youWon')
    overlay.classList.add("divvy");
    const playAgain = document.createElement('button')

    // initial 0 that is displayed on the screen when it loads
    const startNum = document.querySelectorAll('.startnum');
    
    const buttons = document.querySelectorAll('button');

    let win = 0;
    let loss = 0;
    
    //on each button click remove initial 0s and then call functions

    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            startNum.forEach((num) => {
            num.remove();
            })
            let robotPick = generateComputerChoice();
            displayUserChoice(button.className);
            game(button.className, robotPick);
        });
    });

    //append SVG to user play field depnding on what is selected
     function displayUserChoice(choice){
            if (choice == 'Rock'){
                userResult.src = "./Images/Rock_right.svg";
                userResult.alt = "Rock";
            }
            else if (choice == 'Paper'){
                userResult.src = "./Images/Paper_right.svg";
                userResult.alt = "Paper";
            }
            else {
                userResult.src = "./Images/Scissors_right.svg";
                userResult.alt = "Scissors";
            }
            userDisplay.appendChild(userResult);
    }
    /*pick a random choice, append the coresponding svg to playfield and return the selected choice */

        function  generateComputerChoice() {
            const rps = ['Rock', 'Paper', 'Scissors'];
            const random = Math.floor(Math.random() * rps.length);
            choice = rps[random];
            if (choice == 'Rock'){
                compResult.src = './Images/Rock_left.svg';
                compResult.alt = 'Rock';
            }
            else if (choice == 'Paper') {
                compResult.src = './Images/Paper_left.svg';
                compResult.alt = "Paper";
            }
            else {
                compResult.src = './Images/Scissors_left.svg'
                compResult.alt = "Scissors";
            }
            compDisplay.appendChild(compResult);
            return(choice);
        }
    
    //decide who won and return an announcement 

        function decideWinner(userChoice, computerChoice) {
            let winnerAnnouncement = (`You Win! ${userChoice} beats ${computerChoice}!`);
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
            roundAnnouncement.appendChild(announceRound);

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

        /*append overlay with a play again button that restors the game to its original settings and then removes the overlay*/

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
                userResult.remove();
                compResult.remove();
            })
        }