import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, isAuthen: false };

    // This binding is necessary to make `this` work in the callback
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  static propTypes = {
    prop: PropTypes
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }
    this.setState({ open: false });
  };

  handleLogin = () => {
    this.setState(state => ({ isAuthen: true }));
  };

  handleLogout = () => {
    this.setState(state => ({ isAuthen: false }));
  };

  handleOpenSettings = () => {
    return;
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div>
        <React.Fragment>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-account-menu"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}>
            <AccountBoxIcon style={{ color: "#fff", fontSize: '2rem' }} />
          </IconButton>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      {this.state.isAuthen? 
                      (<><MenuItem onClick={this.handleOpenSettings}>User Settings</MenuItem>
                      <MenuItem onClick={this.handleLogout}>Sign Out</MenuItem></>)
                      :(<MenuItem onClick={this.handleLogin}>Sign In</MenuItem>)}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>
      </div>
    )
  }
}

ProfileMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthen: false
};

export default withStyles(styles)(ProfileMenu);