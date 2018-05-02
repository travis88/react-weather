import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather =>
            (weather.main.temp - 273.15).toFixed(2));
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const center = Object.values(cityData.city.coord);

        return (
            <tr key={cityData.city.id}>
                <td>
                    {cityData.city.name}
                    <Map center={center}></Map>
                </td>
                <td><Chart data={temps} color="orange" units="C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" units="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Температура (C)</th>
                        <th>Давление (hPa)</th>
                        <th>Влажность (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
