import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => 
            (weather.main.temp - 273.15).toFixed(2));
        
        return (
            <tr key={cityData.city.id}>
                <td>{cityData.city.name}</td>
                <td>
                    <Chart data={temps} color="orange" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Температура</th>
                        <th>Давление</th>
                        <th>Влажность</th>
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
