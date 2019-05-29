import React, { Component } from 'react';
import HEREMap, { Marker } from 'react-here-maps';


export class Maps extends Component {

    constructor(props) {
        super(props);
    
        this.center = {
          lat: 52.51,
          lng: 13.4,
        };
    
        this.bounds = {
          north: 53.1,
          south: 13.1,
          east: 43.1,
          west: 40.1,
        };
    }

    onCircleDrawn = () => {
    console.log('circle drawn');
    };

    onRectangleDrawn = () => {
    console.log('rectangle drawn');
    };
    

    render() {
        // center the map somewhere in Cairo
        // const center = { lat: 0, lng: 0 };
        var app_id = 'tbfhQg4lCm7Vui9r7o3i';
        var app_code = 'uwhp9X0-PvN8fpVo0jG_cg';
        return (
            <div className="Maps">
                {
                    <HEREMap 
                    appId={app_id}          // The App Id after registering to HERE
                    appCode={app_code}      // The App code after registering to HERE
                    center={this.center}         // Initial map coordinates 
                    zoom={14}               // Initial zoom level
                    hidpi={true}            // Whether to use high quality map tiles or not
                    interactive={true}      // Whether to use static or interactive maps
                    animateCenter={true}    // Animate center prop change
                    animateZoom={true}      // Animate zoom level change
                    useHTTPS={false}        // 	If true then works in https
                    >
                        <Circle
                        center={this.center}
                        radius={1000}
                        fillColor="#CDD223"
                        strokeColor="#23D258"
                        onCircleDrawn={this.onCircleDrawn}
                        />

                        <Rectangle
                        bounds={this.bounds}
                        fillColor="#CDD223"
                        strokeColor= "#23D258"
                        onRectangleDrawn={this.onRectangleDrawn}
                        />
                    </HEREMap>
                }
            </div>
            
        );
    }
}
export default Maps;

