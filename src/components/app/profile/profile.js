import React from "react";
import { withStyles } from "@material-ui/core";

import { withRouter } from "react-router-dom";


import { Typography, Button } from "@material-ui/core";


import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";


const styles = theme => ({});

class Profile extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <img
          style={{ width: "100%" }}
          alt="avatar"
          src="https://cdn2.thecatapi.com/images/8dh.jpg"
        />
        <div style={{ padding: 10 }}>
          <div style={{ display: "flex" }}>
            <Typography style={{ flexGrow: 1 }} variant="h5">
              <b>Garry</b>
            </Typography>
            <Typography color="textSecondary" variant="h6">
              Cat
            </Typography>
          </div>
          <div style={{ fontSize: 12, color: "gray" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PersonOutlineRoundedIcon fontSize="small" />
              </div>
              <div>Breeder : Egi Ginting</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <LocationOnOutlinedIcon fontSize="small" />
              </div>
              <div>10 Km dari sini</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PersonOutlineRoundedIcon fontSize="small" />
              </div>
              <div>Male - Adult</div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <PhoneRoundedIcon fontSize="small" />
              </div>
              <div>Phone Breeder : 081234567890</div>
            </div>
          </div>
          <br />
          <Typography variant="h6">About Pet</Typography>
          <Typography variant="caption" color="textSecondary">
            Is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Profile));
