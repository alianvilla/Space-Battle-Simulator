import React, { useState } from 'react';
import './SpaceBattleSimulator.css';
import BattleTable from './BattleTable.jsx';
import Comments from './Comments.jsx';

const getRandomInt = (min = 5, max = 25) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const SpaceBattleSimulator = () => {
    const [actualHealthPlayer1, setActualHealthPlayer1] = useState(100);
    const [actualHealthPlayer2, setActualHealthPlayer2] = useState(100);
    const [gameState, setGameState] = useState('Fire');
    const [comment, setComment] = useState('Start the game!');
    const [emoji, setEmoji] = useState('💝');

    const restartGame = () => {
        setActualHealthPlayer1(100);
        setActualHealthPlayer2(100);
        setComment('Game restarted! Start the game!');
        setGameState('Fire');
        setEmoji('💝');
    };

    const handleClick = () => {
        let newHealthPlayer1, newHealthPlayer2;

        // Update Player 1's health
        setActualHealthPlayer1(prevHealth => {
            newHealthPlayer1 = Math.max(0, prevHealth - getRandomInt());
            setEmoji(emoji => '❤️‍🩹');
            return newHealthPlayer1;
        });

        // Update Player 2's health
        setActualHealthPlayer2(prevHealth => {
            newHealthPlayer2 = Math.max(0, prevHealth - getRandomInt());
            return newHealthPlayer2;
        });

        // Check game state after health updates
        setTimeout(() => {
            if (newHealthPlayer1 === 0 && newHealthPlayer2 === 0) {
                setComment('Both players are dead! Game over!');
                setGameState('Restart');
            } else if (newHealthPlayer1 === 0) {
                setComment('You Lose, Game Over!');
                setGameState('Restart');
            } else if (newHealthPlayer2 === 0) {
                setComment('You Win!');
                setGameState('Restart');
            } else {
                setComment('Both players are still alive!');
            }
        }, 0);
    };

    return (
        <div className='space-battle-simulator'>
            <h1 id='space-battle-simulator-title'>Space Battle Simulator</h1>
            <BattleTable
                player1={actualHealthPlayer1}
                player2={actualHealthPlayer2}
                handleClick={handleClick}
                restartGame={restartGame}
                gameStatus={gameState}
                emoji={emoji}
            />
            <Comments comment={comment} />
        </div>
    );
};

export default SpaceBattleSimulator;