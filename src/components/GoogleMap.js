import React, { Component, createRef } from "react";

class GoogleMap extends Component {
  get googleMapDiv() {
    return document.getElementById("google-map");
  }
}

googleMapRef = createRef()

createGoogleMap = () => new window.google.maps.Map(this.googleMapRef.current), {
  zoom: 16,
  center: {
    lat: '',
    lng:'',
  },
  disableDefaultUI:true,
}

render() {
  return (
    <div id='google-map'
      red={this.googleMapRef}
    style={{width:'400px',height:'300px'}}></div>
  )
}
