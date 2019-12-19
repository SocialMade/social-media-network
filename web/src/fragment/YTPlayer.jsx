import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
//import * as SomeLibrary from "some-library";

const styles = theme => ({
  root: {
    display: 'flex',
  },
  iframe: {
    width: 528,
    height: 297,
    border: 0
  },
  playerStyles: {
    
  }
});

class YTPlayer extends Component {
  constructor(props) {
    super(props);
    this.player = null;
    this.state = {
      Play: false,
      Pause: false,
      Stop: false,
      next: false,
      prev: false
    }
  }

  static propTypes = {
    prop: PropTypes
  }
  
  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { 
      // If script is already there, load the video directly
      this.initYoutubePlayer();
    }
  };

  initYoutubePlayer = () => {
    this.player = new window.YT.Player(this.props.oIframe.iframeId, {
      /* height: this.props.classes.iframe.height,
      width: this.props.classes.iframe.width,
      videoId: this.props.oIframe.videoId, */
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      //updated component changed
    }
  }

  componentWillUnmount() {
    //component destroy
  }
  
  onPlayerStateChange = () => {
    console.log("onPlayerStateChange");
  }

  onPlayerReady = () => {
    console.log("onPlayerReady");
  }

  render() {
    const { classes, oIframe}  = this.props;

    return (
      <React.Fragment>
        <iframe
        type="text/html"
        id={oIframe.iframeId}
        style={{height: "inherit", width: "inherit"}}
        src={`https://www.youtube.com/embed/${oIframe.videoId}?enablejsapi=1&origin=${window.origin}`}
        frameBorder={classes.iframe.border}
        allow="autoplay; fullscreen"></iframe>
      </React.Fragment>
    )
  }
}

YTPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
  oIframe: PropTypes.object.isRequired,
};

export default withStyles(styles)(YTPlayer);