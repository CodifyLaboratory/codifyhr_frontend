import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.87,
      lng: 74.59
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.877372280353924}
            lng={74.59194127670271}
            image="../../../assets/aboutUsLeftImg.png"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;