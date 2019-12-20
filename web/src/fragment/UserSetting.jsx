import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

class UserSetting extends Component {
  constructor(props) {
    supper(props);
  }

  static propTypes = {
    prop: PropTypes
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

      </div>
    )
  }
}

UserSetting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserSetting);