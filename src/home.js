import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import HeaderBar from "./components/app/home/headerbar";
import Navbar from "./components/app/home/navbar";
import Main from "./components/app/home/main";

import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import { getUsers } from "./_actions/user";
import { getPets } from "./_actions/pet";

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    minHeight: 40,
    padding: 10,
    color: "#fff"
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

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers(1);
    this.props.getPets(1);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 3, height: "100vh", overflow: "hidden" }}>
          <div
            style={{
              maxHeight: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div className={classes.header}>
              <HeaderBar />
            </div>
            <br />
            <Typography
              style={{
                margin: "12px 0px 0px 10px"
              }}
              variant="h6"
            >
              <b>Match</b>
            </Typography>
            <div style={{ overflowY: "auto" }}>
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

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPets: () => dispatch(getPets())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Home)));
