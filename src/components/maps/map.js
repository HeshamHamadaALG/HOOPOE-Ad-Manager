import React, { Component } from 'react';
import HEREMap from 'react-here-maps';



export class Maps extends Component {
    render() {

        return (
            <div className="Maps">
                <HEREMap
                    appId="{TKZQzaLaQ6mAyfMQkQTP}"
                    appCode="{ewFiXDJTbo3D3enckjxGJg}"
                    center={{ lat: 50, lng: 50 }}
                    zoom={14}
                />
            </div>
            
        );
    }
}

export default Maps;
