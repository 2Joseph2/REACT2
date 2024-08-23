

const PlayerList = ({players}) => {
    return ( 
        players.map((player)=>{
            return(
                <div className="player">
                    <img src={player.image} alt={player.name} />
                    <h2>{player.name}</h2>
                    <p>age : {player.age} </p>
                    <p>nationality :  {player.nationality} </p>
                    <p>team :  {player.team} </p>
                    <p>number :  {player.jerseyNumber} </p>
                </div> 
            )
        })
     );
}
 
export default PlayerList;