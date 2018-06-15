import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class Poster extends Component{
	constructor(props){
		super(props);

	}
	render(){

		console.log(this.props)
		const movieId = this.props.poster.id;
		console.log(movieId)
		return(

				
			<div className="col-sm-3">

               <h2>{this.props.image.title}</h2>
               
                <Link to={`/movie/${movieId}`}>
					<img src={this.props.image} /> 
				</Link>
               <p>{this.props.image.overview}</p>
              
            </div>
			)
	}

}

export default Poster;