import React, { Component } from 'react';
import './App.css';
import Map from '../../components/Map/Map';
// export
import { getCurrentLatLng } from '../../services/geolocation';

class App extends Component {
  // Initialize state
  state = {
    lat: null,
    lng: null
  };

  // Add this method
  async componentDidMount() {
    // Destructure the object returned from getCurrentLatLng()
    const {lat, lng} = await getCurrentLatLng();
    // Replace the console.log with the following
  this.setState({lat, lng});
    console.log(lat, lng);
  }

  render() {
    return (
      <div className='App'>
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <header className='App-header'>REACT WEATHER</header>
      </div>
    );
  }

}

export default App;
