import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const setting = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props

  return (
    <div>
      <Slider {...setting}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} movieDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
