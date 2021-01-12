export const Games = ({schedules}) => {


    var date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };

    console.log(date.toLocaleTimeString('en-US'));

    return (
        <div className='matchups-container flex-col'>
            
            <h1>{date.toLocaleString('en-US', options)}</h1>
            <h3>Last update: {date.toLocaleTimeString('en-US')}</h3>
            <p className='time-statement'>All times are set to PST (Pacific Standard Time).</p>
            <p className='time-statement'>Page updates every 30 American seconds.</p>
            {schedules.map(game =>
            <div className={game.gameTime.includes('Final') || game.gameTime.includes('Postponed') ? 'final matchup flex-col' : game.gameTime.includes('PT') ? 'matchup flex-col' : 'live matchup flex-col'} key={game.awayTeam+game.awayRecord+game.homeTeam+game.homeRecord}>
                <h3 className='time'>{game.gameTime}</h3>  
                <div className='flex-col wide'>
                    <div className='team-names flex-row wide'>
                        <div className='flex-col'>
                            <h2 className={!game.awayPoints.length ? '' : game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b)) >
                                           game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b)) ?
                                           'winning' : ''}>{game.awayTeam}</h2>
                            <p>{game.awayRecord}</p>
                        </div>
                        <div className='flex-col'>
                            <h2 className={!game.awayPoints.length ? '' : game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b)) >
                                           game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b)) ?
                                           'winning' : ''}>{game.homeTeam}</h2>
                            <p>{game.homeRecord}</p>
                        </div>
                    </div>
                    {game.gameTime === 'Postponed' ? 
                    <div className='top-players flex-row wide'>
                        <div className='flex-col'>
                            <div className='top-player postponed-message'>
                                <h3>This game has been postponed</h3>
                            </div>
                        </div>
                    </div> :
                    <div className='top-players flex-row wide'>
                        <div className='flex-col'>
                            <div className='top-player'>
                                <h3>{game.awayTopPlayer[0]}</h3>
                                <p>{game.awayTopPlayer[2]}</p>
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='top-player'>
                                <h3>{game.homeTopPlayer[0]}</h3>
                                <p>{game.homeTopPlayer[2]}</p>
                            </div>
                        </div>
                    </div>
                    }
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
                            <span key={game.awayTeam+index}>{qtr === 0 ? '-' : qtr > game.homePoints[index] ? <b>{qtr}</b>: qtr}</span>
                        )}
                        <span>
                            {
                                game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b)) > 
                                game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b)) ? 
                                <b>{game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b))}</b> :
                                game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b))
                            }
                        </span>
                    </div>
                    <div className='points flex-row wide'> 
                        <span>{game.homeCity}</span>
                        {game.homePoints.map((qtr, index) =>
                            <span key={game.homeTeam+index}>{qtr === 0 ? '-' : qtr > game.awayPoints[index] ? <b>{qtr}</b>: qtr}</span>
                        )}
                        <span>
                            {
                                game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b)) >
                                game.awayPoints.reduce((a, b) => parseInt(a) + parseInt(b)) ?
                                <b>{game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b))}</b> :
                                game.homePoints.reduce((a, b) => parseInt(a) + parseInt(b))
                            }
                        </span>
                        
                    </div>
                </div>
                }
            </div>  
            )}
        </div>
    )
}