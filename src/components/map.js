import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';


export default (props) => {
    const mapState = { center: props.center, zoom: 12 }
    return (
        <YMaps>
            <div>
                <Map state={mapState}></Map>
            </div>
        </YMaps>
    );
}