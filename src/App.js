import { Cards, Charts, CountryPicker } from './components';
import './app.scss'
import { Component } from 'react';
import { fetchData } from './api';
import covid from './covid.png'
export default class App extends Component {

  state={
    data:{},
    country:'',
  }

   async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData}) 
 }

handleCountryChange = async(country)=>{
const fetchedData = await fetchData(country)
this.setState({data: fetchedData,country:country}) 

}
  render() {
    const {data,country} = this.state
    return (
<div className="app">
      <img src={covid} alt="covid 19" className='image' />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={this.handleCountryChange}/>
      <Charts data={data} country={country}/>
    </div>    )
  }
}
