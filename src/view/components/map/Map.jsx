import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';


function GoogleMap() {
  const [coordinates,setCoordinate] = useState({lat:42.87,lng:74.59})
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%', zIndex: -2, }}>
        <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyBm-hew0IfxGaNZG75-y37-0RKcseJlb_I'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) =>{
                    console.log(e)
                    setCoordinate({lat:e.center.lat, lng: e.center.lng})
                }}
                onChildClick={''}

            >

            </GoogleMapReact>
      </div>
    );
  }


export default GoogleMap;