import { Component } from 'react'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    }
  }
  render() {
    const { weather } = this.state;
    const weatherList = weather.length ? weather.map((w => <li key={w.zip}><h2>temperture: {w.temp}</h2> <h2>humidity: {w.humidity}</h2></li>)) : <h2>loading...</h2>;



    return (
      <>
        <h1>WEATHER</h1>
        <ul className="bulletless">
          {weatherList}
        </ul>
      </>

    )
  }



  async componentDidMount() {
    try {
      const response = await fetch('./weather.json');
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const weatherData = await response.json();
      this.setState({
        weatherData
      });
    }
    catch (e) {
      console.error(e);
    }
  }
}
export default App
