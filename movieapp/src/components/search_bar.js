import React, {Component} from 'react';


class SearchBar extends Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event){
		event.preventDefault();//prevents the form from moving forward
		// console.log(event.target);
		const searchTerm = event.target[0].value;
		console.log(event.target[0].value);
		// this.props.searchFunction(searchTerm);
		this.props.history.push(`/search/${searchTerm}`);
	}
	render(){
		return (
		    <div>
				<h1>SearchBar</h1>
				<form className="form-inline" onSubmit={this.handleSubmit}>
					  <div className="form-group">
					    
					    <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
					  </div>
					  
  				<button type="submit" className="btn btn-primary">Movie Search</button>
			</form>
				
			</div>
			)
	}
}

export default SearchBar;