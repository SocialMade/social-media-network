import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import { blue } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    display: 'flex',
  }
});


const BlueSwitch = withStyles({
  switchBase: {
    color: blue[300],
    '&$checked': {
      color: blue[500],
    },
    '&$checked + $track': {
      backgroundColor: blue[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


class UserSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      autoPlay: false
    };
  }

  static propTypes = {
    prop: PropTypes
  }

  handleDialog = () => {
    this.setState(prevState =>({
      "open": !prevState.open
    }));
  }

  handleChangeSetting = name => event => {
    const value = event.target.checked;
    this.setState({ [name]: value });
  }

  render() {
    const { classes } = this.props;
    const { open, autoPlay } = this.state;

    return (
      <div className={classes.root}>
        <React.Fragment>
          <Dialog open={open} scroll="body" onClose={this.handleDialog} aria-labelledby="form-dialog-title">
            <DialogContent style={{minHeight: 300, minWidth: 400}}>
              <FormControl>
              <FormLabel component="legend">Video Setting</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <BlueSwitch
                      checked={autoPlay}
                      onChange={this.handleChangeSetting("autoPlay")}
                      value="autoPlay"
                    />
                  }
                  labelPlacement="start"
                  label="Auto Play"
                />
                </FormGroup>
              </FormControl>
            </DialogContent>
          </Dialog>
        </React.Fragment>
      </div>
    )
  }
}

UserSetting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSetting);