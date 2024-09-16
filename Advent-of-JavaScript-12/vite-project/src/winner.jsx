import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Winner = () => {
    const location = useLocation();
    const choice = location.state.choice;
    let winner = 'tie';
    const navigate = useNavigate();
    const Elements = [
      'rock',
      'paper',
      'scissors'
    ];
    const handlePlayAgain = () => {
        navigate(-1);
      };
    let computerSelection = Elements[Math.floor(Math.random() * Elements.length)];
    if (choice === computerSelection) {
      winner = 'tie';
      console.log(winner)
    } else if (choice === 'rock' && computerSelection === 'paper') {
      winner = 'computer';
      console.log(winner)
    }
    else if (choice === 'rock' && computerSelection === 'scissors') {
      winner = 'you';
      console.log(winner)
    }
    else if (choice === 'paper' && computerSelection === 'rock') {
      winner = 'you';
      console.log(winner)
    }
    else if (choice === 'paper' && computerSelection === 'scissors') {
      winner = 'computer';
      console.log(winner)
    }
    else if (choice === 'scissors' && computerSelection === 'rock') {
      winner = 'computer';
      console.log(winner)
    }
    else if (choice === 'scissors' && computerSelection === 'paper') {
      winner = 'you';
      console.log(winner)
    }
      
  return (
    <body className={`winner ${winner}-win`}>
        <div className="wrapper ">
        <div className="your-pick">
            <h1 className="you-win">you win</h1>
            <img src={`./${choice}.png`} alt="Rock" />
        </div>
        <div>
            <p className="tie-win">tie</p>
        </div>
        <div className="computer-pick">
            <h1 className="computer-win">computer wins</h1>
            <img src={`./${computerSelection}.png`} alt="Scissors" />
        </div>
            <button className="play-again" onClick={handlePlayAgain}>
            Play Again
            </button>
        </div>
    </body>
  );
};

export default Winner;
