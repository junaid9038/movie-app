// {
//     type:'ADD_MOVIES'
// }
// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES = 'ADD_MOVIES' // ACTION TYPE 

// action creater
export function addMovies (movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}