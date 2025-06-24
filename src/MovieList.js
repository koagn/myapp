import React from 'react'

const MovieList = ({movies, title , }) => {
  return (
    <div className='blog-list'>
  
    <h2>{title}</h2>
         {movies.map((movie) => (
        <div className="blog-preview" key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Actor: {movie.Actor}</p>
          <p>Year: {movie.year}</p>
          <p>Acted by:{movie.actor}</p>
           
          
        </div>
      ))}
    </div>
  )
}

export default MovieList
