import React from 'react';
import PropTypes from 'prop-types';
import VideoPlayer from "~/components/video-player/video-player";

export default class SmallMovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      hoverTimeout: null,
    };
  }
  render() {
    let {film, onArticleTitleClick} = this.props;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={() => this._handleMouseEnterCard()} onMouseLeave={() => this._handleMouseLeaveCard()}>
        <div className="small-movie-card__image">
          { this.state.isActive && <VideoPlayer film={film} muted conprols/> }
          { this.state.isActive || <img src={film.image} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/> }
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={onArticleTitleClick}>{film.title}</a>
        </h3>
      </article>
    );
  }
  _setIsActive() {
    let hoverTimeout = setTimeout(() => {
      this.setState({
        isActive: true,
      });
    }, 1000);
    this.setState({
      hoverTimeout,
    });
  }
  _removeIsActive() {
    clearTimeout(this.state.hoverTimeout);
    this.setState({
      isActive: false,
      hoverTimeout: null,
    });
  }
  _handleMouseEnterCard() {
    this._setIsActive();
    this.props.onMouseEnterCard();
  }
  _handleMouseLeaveCard() {
    this._removeIsActive();
    this.props.onMouseLeaveCard();
  }
}

SmallMovieCard.propTypes = {
  film: PropTypes.object.isRequired,
  onArticleTitleClick: PropTypes.func,
  onMouseEnterCard: PropTypes.func,
  onMouseLeaveCard: PropTypes.func,
};
