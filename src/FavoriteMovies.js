import React, {Component} from "react"

class FavoriteMovies extends Component{
    /*constructor(props){
      super(props);
    }*/

    render(){
        let usersWithMovies = [];
        usersWithMovies = Object.values(this.props.users).map(user =>  {
             const profilesList = this.props.profiles.filter((p) => Math.trunc(p.userID) === user.id);
             const moviesList = Object.values(this.props.movies).filter((m) => 
                                                             m.id === Math.trunc(profilesList[0].favoriteMovieID));
             return {userName: user.name, movieName: moviesList[0].name, id: user.id};
         }
        );

        return <ol className="list-favorite-movies">
        { usersWithMovies.map(userMovie =>       
            <li key={userMovie.id}>{userMovie.userName}''s favorite movie is {userMovie.movieName}</li>
        )}		
        </ol>;
    }
}

export default FavoriteMovies