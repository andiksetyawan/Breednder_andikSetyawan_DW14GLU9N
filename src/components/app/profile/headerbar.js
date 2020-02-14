import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar, Typography, IconButton } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const styles = () => ({
  avatard: {
    border: "2px solid #fff",
    marginRight: 10
  }
});

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Link to="/home">
          <IconButton aria-label="expand" color="inherit">
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Link>
        <Avatar
          className={classes.avatard}
          //   style={{ border: "2px solid #fff", marginRight: 10 }}
          alt="Remy Sharp"
          src="https://is4-ssl.mzstatic.com/image/thumb/Purple3/v4/a6/24/fa/a624fa65-6468-c192-1a82-d7ff02e02378/source/256x256bb.jpg"
        />
        <Typography variant="h6">Profile Pet</Typography>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(HeaderBar));

