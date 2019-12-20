import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import { getUrlParamValue } from "../util/stringUtil";
import axios from "axios";
import YouTube from 'react-youtube';
import YTPlayer from '../fragment/YTPlayer';

const useStyles = () => ({
  card: {
    width: 384,
    height: 216,
    spacing: 1,
  },
  media: {
    width: 384,
    height: 216,
  },
});

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: null };
  }

  async getVideos() {
    await axios
      .get(
        /* "http://sharemoney-env.jkkfubp3xq.us-east-2.elasticbeanstalk.com/contents" */
        "/data.json"
      )
      .then(({ data }) => {
        this.setState({ videos: data.rows });
      });      
  }

  componentDidMount() {
    this.getVideos();
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const { classes } = this.props;
    // https://developers.google.com/youtube/player_parameters
    const opts = {
      height: 216,
      width: 384,
      playerVars: {
        autoplay: 1,
        playsinline: 1,
        m: 1
      }
    };

    return (
      <div className={classes.root}>
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="space-around">
          {this.state.videos ? (this.state.videos.map((video) => (
            <Box m={1}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia className={classes.media} component="div">
                    {/* <YTPlayer oIframe={{ iframeId: video.id, videoId: `${getUrlParamValue(video.url,"v")}` }} /> */}
                    <YouTube
                      videoId={getUrlParamValue(video.url,"v")}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </CardMedia>
                </CardActionArea>
              </Card>
            </Box>
          ))) : (<></>)}
        </Box>
      </div >
    );
  }
}

export default withStyles(useStyles)(Youtube);
