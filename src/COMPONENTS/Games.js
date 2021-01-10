export const Games = ({schedules}) => {

    console.log(schedules)

    var date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    return (
        <div className='matchups-container flex-col'>
            
            <h1>{date.toLocaleString('en-US', options)}</h1>
            {schedules.map(game =>
            <div className={game.gameTime === 'Final' ? 'final matchup flex-col' : 'matchup flex-col'} key={game.awayTeam+game.awayRecord+game.homeTeam+game.homeRecord}>
                <h3 className='time'>{game.gameTime}</h3>  
                <div className='flex-col wide'>
                    <div className='team-names flex-row wide'>
                        <h2>{game.awayTeam}</h2>
                        <h2>{game.homeTeam}</h2>
                    </div>
                    <div className='top-players flex-row wide'>
                        <div className='flex-col'>
                            <div className='top-player'>
                                <p>{game.awayTopPlayer[0]}</p>
                                <p>{game.awayTopPlayer[2]}</p>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='top-player'>
                                <p>{game.homeTopPlayer[0]}</p>
                                <p>{game.homeTopPlayer[2]}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {!game.awayPoints.length ? <div></div> : 
                <div className='points-table flex-col wide'>
                    <div className='points points-header flex-row wide'>
                        <span>Team</span>
                        {game.quarters.map(qtr => (
                            <span key={game.homeTeam+game.awayTeam+qtr}>{qtr}</span>
                        ))}
                        <span>Total</span>
                    </div>

                    <div className='points flex-row wide'> 
                        <span>{game.awayCity}</span>
                        {game.awayPoints.map((qtr, index) =>
                            <span key={game.awayTeam+index}>{qtr === 0 ? '-' : qtr}</span>
                        )}
                        <span>{game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b))}</span>
                    </div>
                    <div className='points flex-row wide'> 
                        <span>{game.homeCity}</span>
                        {game.homePoints.map((qtr, index) =>
                            <span key={game.homeTeam+index}>{qtr === 0 ? '-' : qtr}</span>
                        )}
                        <span>{game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b), 0)}</span>
                        
                    </div>
                </div>
                }
            </div>  
            )}
        </div>
    )
}