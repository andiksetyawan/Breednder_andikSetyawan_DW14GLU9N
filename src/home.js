import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import HeaderBar from "./components/app/home/headerbar";
import Navbar from "./components/app/home/navbar";
import Main from "./components/app/home/main";

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    minHeight: 40,
    padding: 10,
    color: "#fff",
    // position:"fixed",
    // width:"inherit"
  },

  main: {
    backgroundImage: "url('tile.png')",
    height: "100%",
    maxHeight: "100%",
    width: "100%",
    backgroundRepeat: "repeat",
    backgroundSize: "450px 700px"
    // "&:before":{
    //     opacity: "0.1"
    // }
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3, height: "100vh" }}>
          <div
            style={{
              maxHeight: "100%",
              overflowX: "hidden",
              overflowY: "auto"
            }}
          >
            <div className={classes.header}>
              <HeaderBar />
            </div>
            <br />
            <div>
              <Navbar />
            </div>
          </div>
        </div>
        <div style={{ flex: 7, height: "100vh", overflow: "auto" }}>
          <div className={classes.main}>
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Profile));
