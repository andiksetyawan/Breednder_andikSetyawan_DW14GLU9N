import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar, Typography, IconButton } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = () => ({
  avatar: {
    border: "2px solid #fff",
    marginRight: 10
  }
});

class HeaderBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Link to="/profile">
          <Avatar
            className={classes.avatar}
            style={{}}
            alt="Remy Sharp"
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple3/v4/a6/24/fa/a624fa65-6468-c192-1a82-d7ff02e02378/source/256x256bb.jpg"
          />
        </Link>
        <Typography variant="h6">Garry</Typography>
        <Link to="/">
          <IconButton aria-label="expand" color="inherit" onClick={() => {}}>
            <ExpandMoreIcon />
          </IconButton>
        </Link>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(HeaderBar));
