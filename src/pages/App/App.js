import React, { Component } from 'react';
import './App.css';
import Map from '../../components/Map/Map';
// export
import { getCurrentLatLng } from '../../services/geolocation';

class App extends Component {

  // Add this method
  async componentDidMount() {
    // Destructure the object returned from getCurrentLatLng()
    const {lat, lng} = await getCurrentLatLng();
    console.log(lat, lng);
  }

  render() {
    return (
      <div className='App'>
        <Map />
        <header className='App-header'>REACT WEATHER</header>
      </div>
    );
  }

}

export default App;
