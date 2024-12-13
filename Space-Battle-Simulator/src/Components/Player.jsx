import './Player.css'

const Player = ({player, color, emoji}) => {
    return (
        <div className="Player">
            <p className='Player-health' style={{color: color}}>{color === 'green' ? 'Player 1' : 'Enemy'} Health: {player} {emoji}</p>
        </div>
    );
}


export default Player