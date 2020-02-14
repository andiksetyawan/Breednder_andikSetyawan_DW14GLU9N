import React from "react";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Match from "../../match";

const styles = theme => ({});

class Navbar extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography
          style={{
            margin: "0px 10px"
          }}
          variant="h6"
        >
          <b>Match</b>
        </Typography>
        <Match />
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Navbar));
