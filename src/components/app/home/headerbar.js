import React from "react";
import { withStyles } from "@material-ui/core/styles";

import { Avatar, Typography, IconButton } from "@material-ui/core";

import { withRouter, Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { connect } from "react-redux";
import { setCurrentPet } from "../../../_actions/pet";
import { getMatch } from "../../../_actions/match";

const styles = () => ({
  avatar: {
    border: "2px solid #fff",
    marginRight: 10
  }
});

class HeaderBar extends React.Component {
  state = {
    pet: 0,
    open: false,
    anchorEl: null
  };
  render() {
    const { classes, pet } = this.props;
    //const currentPet = pet.data[0];
    // console.log("current petxxx", pet);
    //console.log("pet header", PageTransitionEvent);
    return (
      <React.Fragment>
        <Link to="/profile">
          <Avatar
            className={classes.avatar}
            style={{}}
            alt="Remy Sharp"
            src={pet.currentPet.photo}
          />
        </Link>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={e => this.setState({ anchorEl: e.currentTarget })}
        >
          <Typography variant="h6" style={{ color: "#fff" }}>
            {pet.currentPet.name}
          </Typography>
          <ExpandMoreIcon style={{ color: "#fff" }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={() => this.setState({ anchorEl: null })}
        >
          {pet.data.map((item, i) => {
            return (
              <MenuItem
                key={i}
                onClick={e => {
                  this.setState({ anchorEl: null });
                  console.log("etarget", i);
                  this.props.setCurrentPet(pet.data[i]);
                  this.props.getMatch(pet.data[i].id);
                }}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
        {/* <Typography variant="h6">{pet.currentPet.name}</Typography>
        <Link to="/">
          <IconButton aria-label="expand" color="inherit" onClick={() => {}}>
            <ExpandMoreIcon />
          </IconButton>
        </Link> */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPet: data => dispatch(setCurrentPet(data)),
    getMatch: pet_id => dispatch(getMatch(pet_id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(HeaderBar)));
