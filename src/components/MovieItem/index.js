// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {videoUrl, thumbnailUrl} = movieDetails
  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="img-thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              .
              <IoMdClose size={21} color="grey" />
            </button>
            <div className="trailer-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
