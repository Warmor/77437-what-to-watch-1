import React from 'react';
import PropTypes from 'prop-types';

export default function VideoPlayer(props) {
  let {src, poster, muted, controls} = props;
  return (
    <video src={src} poster={poster} width="280" height="175" muted={muted} controls={controls} autoPlay={true}/>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  controls: PropTypes.bool,
};
