import { ADD_MOVIES,ADD_TO_FAVOURITE,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES } from "../action";

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false

};

export  function movies(state= initialMoviesState ,action){
//   if(action.type === ADD_MOVIES){// generaly react comunity not want to use if else 
//     return {
//         ...state,
//         list:action.movies
//     }
//   }
//   return state;
console.log('MOVIES_REDUCER');

switch (action.type){
    case ADD_MOVIES :
        return {
         ...state,
          list:action.movies
       }
    case ADD_TO_FAVOURITE :
        return{
            ...state,
            favourites:[action.movie,...state.favourites]
        }
    case REMOVE_FROM_FAVOURITES:
        const filteredArray = state.favourites.filter(
            movie=>movie.Title !== action.movie.Title
        );

        return{
            ...state,
            favourites:filteredArray
        };
    case SET_SHOW_FAVOURITES:
        return{
            ...state,
            showFavourites:action.val
        }

    default:
        return state;
}
}

const initialSearchState = {
     result:{}
};

export function search (state = initialSearchState,action){
    console.log('SEARCH_REDUCER');

    return state;
}

// root reducer 

const intialRootState ={
    movies:initialMoviesState,
    search:initialSearchState
}

export default function roodReducer(state = intialRootState ,action){
    return{
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
} 

