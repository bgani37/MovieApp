import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[];

    constructor(){
        this.movies=[
            {id:1,title:"Film 1",description:"Film 1 Açıklama",imageUrl:"1.jpg",isPopular:false},
            {id:2,title:"Film 2",description:"Film 2 Açıklama",imageUrl:"2.jpg",isPopular:true},
            {id:3,title:"Film 3",description:"Film 3 Açıklama",imageUrl:"3.jpg",isPopular:false},
            {id:4,title:"Film 4",description:"Film 4 Açıklama",imageUrl:"4.jpg",isPopular:true}
          ];
    }

    getMovies():Movie[]{
        return this.movies;
    }
    getPopularMovies():Movie[]{
        return this.movies.filter(x=>x.isPopular);
    }
    getMovieById(id:number):Movie{
        return this.movies.find(i=>i.id=id);
    }
}