import React, { Component } from "react";
import { addFavourite,removeFromFavourites } from "../action";



class MovieCard extends React.Component {

  handleFavouriteClick= ()=>{
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie));
    }

    handleUnFavouriteClick = ()=>{
        const {movie} = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render(){
        const {movie,isFavourite} = this.props;

        return (
            
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie Poster" />
                </div>
                <div className="right">
                    <div className="titlel">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ?<button className="favourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite </button>
                            :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite </button>



                        }
                    </div>
                </div>
            </div>
          );

    }
  
}

export default MovieCard;
