import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSchedule } from './ACTIONS/actions';
import { Games } from './COMPONENTS/Games';
import basketballImg from './IMAGES/basketball.png';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      dispatch(getSchedule());
    }, 30000);
  }, [dispatch])

  const schedules = useSelector((state) => state.schedules);


  return (
    <div className="App flex-col">
        
      {!schedules.length ? <div className='loading flex-col'><img className='basketball' src={basketballImg} alt='basketball' /><p className='loading-text'></p></div> : <Games schedules={schedules}/>}











      {/* {today.map(game => (
        <div className={game.time === 'LIVE' ? 'matchup flex-col live' : 'matchup flex-col'} key={game.roadTeam+game.homeTeam}>
          <h2>{game.awayTeam} @ {game.homeTeam}</h2>
          <h3>{game.time}</h3>
          {scores.filter(score => game.awayTeam.includes(score.awayTeam) && game.homeTeam.includes(score.homeTeam)).map(score => (
            <div className='scores'>
              <h4>{score.time}</h4>
              <div className='quarters'>
                <span>Team</span>
                <span>1st</span>
                <span>2nd</span>
                <span>3rd</span>
                <span>4th</span>
                <span>Total</span>
              </div>
              <div className='quarters'>
                <span>{score.awayTeam}</span>
                <span className={score.away1 > score.home1 ? 'higherScore' : 'lowerScore'}>{score.away1}</span>
                <span className={score.away2 > score.home2 ? 'higherScore' : 'lowerScore'}>{score.away2}</span>
                <span className={score.away3 > score.home3 ? 'higherScore' : 'lowerScore'}>{score.away3}</span>
                <span className={score.away4 > score.home4 ? 'higherScore' : 'lowerScore'}>{score.away4}</span>
                <span className={
                                  (parseInt(score.away1 === '' ? 0 : score.away1) + 
                                  parseInt(score.away2 === '' ? 0 : score.away2) + 
                                  parseInt(score.away3 === '' ? 0 : score.away3) + 
                                  parseInt(score.away4 === '' ? 0 : score.away4)) 
                                  >
                                  (parseInt(score.home1 === '' ? 0 : score.home1) + 
                                  parseInt(score.home2 === '' ? 0 : score.home2) + 
                                  parseInt(score.home3 === '' ? 0 : score.home3) + 
                                  parseInt(score.home4 === '' ? 0 : score.home4)) ? 'higherScore' : 'lowerScore'
                                }>
                  {
                    parseInt(score.away1 === '' ? 0 : score.away1) + 
                    parseInt(score.away2 === '' ? 0 : score.away2) + 
                    parseInt(score.away3 === '' ? 0 : score.away3) + 
                    parseInt(score.away4 === '' ? 0 : score.away4)
                  }
                </span>
              </div>
              <div className='quarters'>
                <span>{score.homeTeam}</span>
                <span className={score.away1 < score.home1 ? 'higherScore' : 'lowerScore'}>{score.home1}</span>
                <span className={score.away2 < score.home2 ? 'higherScore' : 'lowerScore'}>{score.home2}</span>
                <span className={score.away3 < score.home3 ? 'higherScore' : 'lowerScore'}>{score.home3}</span>
                <span className={score.away4 < score.home4 ? 'higherScore' : 'lowerScore'}>{score.home4}</span>
                <span className={
                                  (parseInt(score.away1 === '' ? 0 : score.away1) + 
                                  parseInt(score.away2 === '' ? 0 : score.away2) + 
                                  parseInt(score.away3 === '' ? 0 : score.away3) + 
                                  parseInt(score.away4 === '' ? 0 : score.away4)) 
                                  <
                                  (parseInt(score.home1 === '' ? 0 : score.home1) + 
                                  parseInt(score.home2 === '' ? 0 : score.home2) + 
                                  parseInt(score.home3 === '' ? 0 : score.home3) + 
                                  parseInt(score.home4 === '' ? 0 : score.home4)) ? 'higherScore' : 'lowerScore'
                                }>
                  {
                    parseInt(score.home1 === '' ? 0 : score.home1) + 
                    parseInt(score.home2 === '' ? 0 : score.home2) + 
                    parseInt(score.home3 === '' ? 0 : score.home3) + 
                    parseInt(score.home4 === '' ? 0 : score.home4)
                  }
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}

      <h1>Finished Games</h1>
        {finishedGames.map(game =>
          <div className='finished flex-col' key={game.roadTeam+game.homeTeam}>
            <h2>{game.time.replace(',', ' @').replace(/[0-9]/g, '')}</h2>
            {scores.filter(score => game.awayTeam.includes(score.awayTeam)).map(score => (
            <div className='scores'>
              <h4>{score.time}</h4>
              <div className='quarters'>
                <span>Team</span>
                <span>1st</span>
                <span>2nd</span>
                <span>3rd</span>
                <span>4th</span>
                <span>Total</span>
              </div>
              <div className='quarters'>
                <span>{score.awayTeam}</span>
                <span className={score.away1 > score.home1 ? 'higherScore' : 'lowerScore'}>{score.away1}</span>
                <span className={score.away2 > score.home2 ? 'higherScore' : 'lowerScore'}>{score.away2}</span>
                <span className={score.away3 > score.home3 ? 'higherScore' : 'lowerScore'}>{score.away3}</span>
                <span className={score.away4 > score.home4 ? 'higherScore' : 'lowerScore'}>{score.away4}</span>
                <span className={
                                  (parseInt(score.away1 === '' ? 0 : score.away1) + 
                                  parseInt(score.away2 === '' ? 0 : score.away2) + 
                                  parseInt(score.away3 === '' ? 0 : score.away3) + 
                                  parseInt(score.away4 === '' ? 0 : score.away4)) 
                                  >
                                  (parseInt(score.home1 === '' ? 0 : score.home1) + 
                                  parseInt(score.home2 === '' ? 0 : score.home2) + 
                                  parseInt(score.home3 === '' ? 0 : score.home3) + 
                                  parseInt(score.home4 === '' ? 0 : score.home4)) ? 'higherScore' : 'lowerScore'
                                }>
                  {
                    parseInt(score.away1 === '' ? 0 : score.away1) + 
                    parseInt(score.away2 === '' ? 0 : score.away2) + 
                    parseInt(score.away3 === '' ? 0 : score.away3) + 
                    parseInt(score.away4 === '' ? 0 : score.away4)
                  }
                </span>
              </div>
              <div className='quarters'>
                <span>{score.homeTeam}</span>
                <span className={score.away1 < score.home1 ? 'higherScore' : 'lowerScore'}>{score.home1}</span>
                <span className={score.away2 < score.home2 ? 'higherScore' : 'lowerScore'}>{score.home2}</span>
                <span className={score.away3 < score.home3 ? 'higherScore' : 'lowerScore'}>{score.home3}</span>
                <span className={score.away4 < score.home4 ? 'higherScore' : 'lowerScore'}>{score.home4}</span>
                <span className={
                                  (parseInt(score.away1 === '' ? 0 : score.away1) + 
                                  parseInt(score.away2 === '' ? 0 : score.away2) + 
                                  parseInt(score.away3 === '' ? 0 : score.away3) + 
                                  parseInt(score.away4 === '' ? 0 : score.away4)) 
                                  <
                                  (parseInt(score.home1 === '' ? 0 : score.home1) + 
                                  parseInt(score.home2 === '' ? 0 : score.home2) + 
                                  parseInt(score.home3 === '' ? 0 : score.home3) + 
                                  parseInt(score.home4 === '' ? 0 : score.home4)) ? 'higherScore' : 'lowerScore'
                                }>
                  {
                    parseInt(score.home1 === '' ? 0 : score.home1) + 
                    parseInt(score.home2 === '' ? 0 : score.home2) + 
                    parseInt(score.home3 === '' ? 0 : score.home3) + 
                    parseInt(score.home4 === '' ? 0 : score.home4)
                  }
                </span>
              </div>
            </div>
          ))}
          </div>
        )} */}
      </div>
  );
}

export default App;
