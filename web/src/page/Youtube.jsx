import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { flexbox } from '@material-ui/system';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import GridListTile from "@material-ui/core/GridListTile";
import {getUrlParamValue} from '../util/stringUtil';
import axios from "axios";

const useStyles = theme => ({
  card: {
    width: 380,
    height: 240,
    spacing: 1,
  },
  media: {
    width: 380,
    height: 240,
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

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="space-around">
          {this.state.videos ? (this.state.videos.map((video, index) => (
            <Box m={1}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} component="iframe" height="140"
                  /* src={`http://www.youtube.com/embed/${getUrlParamValue(video.url,"v")}`} */
                  src={video.url} />
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
