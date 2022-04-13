import './cards.scss'
import CountUp from 'react-countup';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
if(!confirmed){
return 'loading';
}
  return (
    <div className="cards">
      
            

      <div className="grid">
        <div className="card1">
          <h1>Infected</h1><div className='inside'>
          <CountUp className='number' start={0} end={confirmed.value} duration={2.5} separator=","/>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <span className='desc'>Number of Active Covid-19 Cases</span>
          </div></div>
        <div className="card2">
        <h1>Recovered</h1><div className='inside'>
          <CountUp className='number' start={0} end={recovered.value} duration={2.5} separator=","/>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <span className='desc'>Number of Recovered Covid-19 Cases</span>
          </div></div>
        <div className="card3">
        <h1>Death</h1><div className='inside'>
          <CountUp className='number' start={0} end={deaths.value} duration={2.5} separator=","/>
          <span>{new Date(lastUpdate).toDateString()}</span>
          <span className='desc'>Number of Deaths caused by Covid-19</span>
          </div></div>
      </div>
    </div>
  );
};

export default Cards