// {
//     type:'ADD_MOVIES'
// }
// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES = 'ADD_MOVIES'; // ACTION TYPE 
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// action creater
export function addMovies (movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie
    }
}

export function removeFromFavourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie
    };
}

export function setShowFavourites(val){
    return{
        type:SET_SHOW_FAVOURITES,
        val
    };
}
