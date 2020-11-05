
    const displayChoice = document.querySelector('.youPlayed');
    const result = document.createElement('p');

    const compDisplay = document.querySelector('.compPlayed');
    const compResult = document.createElement('p');
    compResult.setAttribute('style', 'font-size: 2rem; color:red;');

    let finalResult = document.querySelector('.result')
    ;
    let results = document.createElement('p')
    results.setAttribute('style', 'font-size: 2rem; color:red; text-align: center;')
    
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', function() {
            result.textContent = button.className;
            result.setAttribute('style', 'font-size: 2rem; color:red;');
            displayChoice.appendChild(result);
            let robotPick = generateComputerChoice();
            compResult.textContent = robotPick;
            compDisplay.appendChild(compResult)
            game(button.className, robotPick);
        });
    });
    

        // randomly returns Rock, Paper, or Scissors 
        function  generateComputerChoice() {
            const rps = ['Rock', 'Paper', 'Scissors'];
            const random = Math.floor(Math.random() * rps.length);
            return(rps[random]);
        }
        /* compares the users choice and computers choice and declares if the user
        won or lost */
        function decideWinner(userChoice, computerChoice) {
            userChoice = userChoice.toLowerCase();
            computerChoice =computerChoice.toLowerCase();
            console.log(userChoice);
            console.log(computerChoice);
            let winnerAnnouncement = (`you win ${userChoice} beats ${computerChoice}`);
            let loserAnnouncement = (`you loose ${computerChoice} beats ${userChoice}`);
            
            switch (userChoice) {
                case computerChoice:
                    return (`Tie! You both played ${userChoice}. No Point!`);
                    break;

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
            let win = 0;
            let loss = 0;

            let roundWinner = decideWinner(choice, computerChoice);
                /* if win/loss is in the string add a win/loss. If there isa tie 
                do not count that round in the 5 rosund total. Call announceScore
                at the end of each round */
                if (roundWinner.search('win') > -1){
                    win++;
                }
                else if (roundWinner.search('loose') > -1) {
                    loss++;    
                    }
            
            
            // Best of 5 game has ended. Notify user if they won or lost
            
            if (win > loss){
                results.textContent = 'You Won!';
    
            }
            else if (win < loss) {
                results.textContent = 'You Lost!';
            }
            else{
                results.textContent = 'Tie!';
            }
            finalResult.appendChild(results)
    }
