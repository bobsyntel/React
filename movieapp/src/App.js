import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import Poster from './components/poster'
import About from './components/About'
import SearchBar from './components/search_bar'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import MovieSearch from './components/MovieSearch';
import SingleMovie from './components/SingleMovie';
import Login from './components/Login';
import Register from './components/Register';
import BootstrapNavBar from './components/BootStrapNavBar';
class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        moviePosters: []
      }
      this.newUserSearch = this.newUserSearch.bind(this);
    }

    componentDidMount(){
      console.log("The component did mount");
      const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5';
      $.getJSON(url,(movieData)=>{
          console.log(movieData);
           this.setState({
             moviePosters: movieData.results
           });
      })
    }

    newUserSearch(movieTitle){
      const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`
      $.getJSON(url,(movieData)=>{
        console.log(movieData);
        this.setState({
          moviePosters: movieData.results
        })
      })
    }



  render() {
        if(this.state.moviePosters.length === 0){
      return (<h1>Loading...</h1>)
    }

    const posters = this.state.moviePosters.map((poster,index)=>{
      const imagePath =  `http://image.tmdb.org/t/p/w300${poster.poster_path}`;
           return(
                <Poster poster= {poster} image={imagePath}/>
               );
          
    });
     
   
    return (
        <Router>
        <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <h1>Movies Now Playing</h1>
          <Route path="/" component={BootstrapNavBar} />
          <Route path="/" component={SearchBar} />
          <Route path="/about" component={About} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
{/*          You dont always have to give it a component.
          You can give it a callback which can render componenets*/}
          <Route exact path="/" render={()=>{
            return(
              <div>
                {posters}
              </div>
            )
          }} />
         <Route path="/search/:searchTerm" component={MovieSearch} />
         <Route path="/movie/:movieId" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

export default App;
