import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import HeaderBar from "./components/app/profile/headerbar";
import Navbar from "./components/app/profile/navbar";
import Main from "./components/app/profile/main";

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    minHeight: 40,
    padding: 10,
    color: "#fff"
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
  constructor(props) {
    super(props);
    this.state = {
      navtitle: "Profile Pet"
    };
  }
  
  changeTitle = (val) => {
   // alert("wkowwoksss"+val);
    this.setState({ navtitle: val });
  }

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
              {/* <HeaderBar /> */}
              <HeaderBar title={this.state.navtitle} />
            </div>
            <br />
            <div>
              <Navbar />
            </div>
          </div>
        </div>
        <div style={{ flex: 7, height: "100vh", overflow: "auto" }}>
          <div className={classes.main}>
            <Main onTitle={this.changeTitle} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Profile));
