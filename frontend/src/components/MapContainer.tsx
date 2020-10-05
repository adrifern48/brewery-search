import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const MapContainer = (props: any) => {
    const [center, setCenter] = useState({lat: 37.711776, lng: -120.957784 });
    const [zoom, setZoom] = useState(11);
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY || '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={37.711776}
            lng={-120.957784}
            text="My Marker"
          />
        </GoogleMapReact>
    );
}

export default MapContainer;