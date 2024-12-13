import './BattleTable.css'
import Player from './Player.jsx'

const BattleTable = ({player1, player2, gameStatus, handleClick, restartGame, emoji}) => {
    return (
        <div className="BattleTable">
            <Player color="green" player={player1} emoji={emoji}/>
            <button
                onClick={gameStatus === 'Restart' ? restartGame : handleClick}
                className= {`BattleTable-fire ${
                    gameStatus === 'Restart' ? 'BattleTable-fire-restart' : ''}`}
            >
                {gameStatus === 'Restart' ? 'Restart' : 'Fire'}
            </button>
            <Player color="red" player={player2} emoji={emoji} />
        </div>
    );
}

export default BattleTable
