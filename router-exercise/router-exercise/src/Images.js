import React,{Component} from 'react';
function Images({atlImages}){
	// Map through images
	const img = atlImages.map((images,index)=>{
		console.log(index)
		 // return(<img src={images} width="100%"/>);
		  return(images);
	});
	return(
		// <div className="col-sm-3">
		// 	<p>Images go here as props</p>
		// 	{img}
	 //   </div>
	
	 <div id="myCarousel" className="carousel slide" data-ride="carousel">
  
			  <ol className="carousel-indicators">
			    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>

 
  		<div className="carousel-inner">
				    
				    
				    <div className="item active">
				      	<img src={img[0]} width="100%"/>
				    </div>
				    <div className="item ">
				      	<img src={img[1]} width="100%"/>
				    </div>

				     <div className="item ">
				      <img src={img[2]} width="100%"/>
				    </div>
		</div>

				  
				  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
				    <span className="glyphicon glyphicon-chevron-left"></span>
				    <span className="sr-only">Previous</span>
				  </a>
				  <a className="right carousel-control" href="#myCarousel" data-slide="next">
				    <span className="glyphicon glyphicon-chevron-right"></span>
				    <span className="sr-only">Next</span>
				  </a>
			</div>
		
	)
}

export default Images;