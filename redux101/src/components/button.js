import React,{Component} from 'react';
import {connect} from 'react-redux';
import  { bindActionCreators } from 'redux';
import UpdateHome from '../actions/UpdateHome';

class Button extends Component{
	constructor(){

		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		console.log("User click");
		this.props.updateHome();
	}
	render(){

		return(
			<button onClick={this.handleClick} className="btn btn-success"> Click Me </button>
			)
	}
}

function mapStateToProps(state){
	return {}
}

function mapDispatchToProps(dispatch){
	return 	bindActionCreators({
				updateHome: UpdateHome
		},
		dispatch)
}

// export default Button;

export default connect(mapStateToProps,mapDispatchToProps)(Button);