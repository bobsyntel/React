import React,{Component} from 'react';
import {connect } from 'react-redux';
class Home extends Component{
	render(){

		return(
			<h1>{this.props.homeText}</h1>
			)
	}
}

function mapStateToProps(state){
	return {
		homeText: state.home
	}
}

// export default Home;

export default connect(mapStateToProps)(Home);
