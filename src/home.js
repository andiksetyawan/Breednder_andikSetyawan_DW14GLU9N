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
import { getMatch } from "./_actions/match";

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
    //console.log("id===========", this.props.auth.user.id);
    const { user } = this.props.auth;
    this.props.getUsers(user.id);
    if (this.props.pet && this.props.pet.data.length == 0) {
      this.props.getPets(user.id);
    }

    if (this.props.pet.data.length > 0) {
    //  console.log("pet home current", this.props.pet.currentPet.id);
      this.props.getMatch(this.props.pet.currentPet.id);
    }
    //const { pet } = this.props.pet;
  }

  render() {
    const { classes, auth, pet, user, matched } = this.props;
    console.log("xxxxxxxxxxx home", matched);

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
              <HeaderBar pet={pet} />
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
              <Navbar matched={matched} />
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

const mapStateToProps = state => {
  return {
    auth: state.auth,
    user: state.user,
    pet: state.pet,
    matched: state.match
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: id => dispatch(getUsers(id)),
    getPets: user_id => dispatch(getPets(user_id)),
    getMatch: pet_id => dispatch(getMatch(pet_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Home)));
