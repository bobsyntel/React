import React, { Component } from 'react';
import $ from 'jquery'

class Atlanta extends Component {
	constructor(props) {
		super(props);
		this.state={
			icon: "",
			temp: "",
			temp_min: "",
			temp_max: "",
			desc: ""			
		}
	}

	componentDidMount() {
		var url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30305,us&appid=482c145ce8edf1d69ea5168f9d06460c';
		$.getJSON(url, (weatherData) =>{
			console.log(weatherData);
			this.setState({
					icon: [weatherData.weather[0].icon,weatherData.weather[1].icon],
					temp: weatherData.main.temp,
					temp_min: weatherData.main.temp_min,
					temp_max:weatherData.main.temp_max,
					desc:[weatherData.weather[0].description,weatherData.weather[1].description]
			})
		});
	}

	render(){
		const imagePath = `http://openweathermap.org/img/w/${this.state.icon[1]}.png`;
		return(
			<div className="text-center">
				<h1 >Real-time Atlanta Weather!</h1>
				<img src={imagePath}/>
				<p>The minimum temperature is : {this.state.temp_min}</p>
				<p>The maximunm temperature is : {this.state.temp_max}</p>
				<p>The temperature is : {this.state.temp}</p>
				<p>The weather description : {this.state.desc[0]},{this.state.desc[1]}</p>
			</div>
		);
	}
}

export default Atlanta;
