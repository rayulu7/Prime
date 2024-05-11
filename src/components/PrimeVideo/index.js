// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const action = 'ACTION'
const comedy = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === action,
  )

  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === comedy,
  )

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img-prime"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MovieSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
