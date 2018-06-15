import React, { Component } from 'react';

class About extends Component {
	constructor(props){
		super(props);
		// console.log("is passing images",props);
		// var img = this.props.atlImages;
		// console.log("checking img ",img)
		
	}

	
	
  render() {
  	// const img = this.props.atlImages;
   //  var img = this.props.atlImages;
  	// console.log("is passing images at render",img);
  	// const images = img.map((atlimg)=>{
  	// 		return({atlimg});
  	// });
    return (
      <div className="col-sm-4">
        Atlanta is the capital of and the most populous city in the U.S. state of Georgia, with an estimated 2015 population of 463,878.[6] Atlanta is the cultural and economic center of the Atlanta metropolitan area, home to 5,710,795 people and the ninth largest metropolitan area in the United States.[13] Atlanta is the county seat of Fulton County, and a small portion of the city extends eastward into DeKalb County.
        </div>
      
      
    );
  }
}

export default About;
