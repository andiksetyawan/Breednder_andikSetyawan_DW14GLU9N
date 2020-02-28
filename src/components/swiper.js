import React, { useState } from "react";
import "./swiper.css";
import TinderCard from "react-tinder-card";
import { Typography } from "@material-ui/core";

import { connect } from "react-redux";

import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";

const db = [
  {
    name: "Richard Hendricks",
    url:
      "https://github.com/3DJakob/react-tinder-card-demo/blob/master/public/img/richard.jpg?raw=true"
  },
  {
    name: "Erlich Bachman",
    url:
      "https://raw.githubusercontent.com/3DJakob/react-tinder-card-demo/master/public/img/erlich.jpg"
  },
  {
    name: "Monica Hall",
    url:
      "https://github.com/3DJakob/react-tinder-card-demo/blob/master/public/img/monica.jpg?raw=true"
  },
  {
    name: "Jared Dunn",
    url:
      "https://raw.githubusercontent.com/3DJakob/react-tinder-card-demo/master/public/img/jared.jpg"
  },
  {
    name: "Dinesh Chugtai",
    url:
      "https://raw.githubusercontent.com/3DJakob/react-tinder-card-demo/master/public/img/dinesh.jpg"
  }
];

class Swiper extends React.Component {
  state = {
    lastDirection: null
  };

  swiped = (direction, nameToDelete) => {
    // console.log("removing: " + nameToDelete);
    console.log("swipe on  " + direction);
    // setLastDirection(direction);
    if (direction == "left") {
    } else {
    }
    this.setState({
      lastDirection: direction
    });
  };

  outOfFrame = name => {
    console.log(name + " left the screen!");
    ////IF CEK INDEX TERAKHIR LOAD ULANG
  };

  render() {
    const { pet } = this.props;
    return (
      <>
        {/* <div style={{ display: "fixed", top: 0, left: 0 }}>
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: 1 }}>
              {this.state.lastDirection == "left" && (
                <div style={{color: "green" }}>
                  <h1>LIKE</h1>
                </div>
              )}
            </div>
            <div>
              {this.state.lastDirection == "right" && this.state.lastDirection}
            </div>
          </div>
        </div> */}
        <div className="swiper1">
          <div className="cardContainer">
            {pet.data.map(character => (
              <TinderCard
                className="swipe1"
                key={character.name}
                onSwipe={dir => this.swiped(dir, character.name)}
                onCardLeftScreen={() => this.outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.photo + ")" }}
                  className="card1"
                >
                  <div className="caption">
                    <Typography variant="h5">
                      <b>{character.name}</b>
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <PersonOutlineRoundedIcon fontSize="small" />
                      </div>
                      <div>Breeder : {character.user.name}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div>
                        <LocationOnOutlinedIcon fontSize="small" />
                      </div>
                      <div>10km dari sini</div>
                    </div>
                  </div>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    pet: state.pet
  };
};

export default connect(mapStateToProps)(Swiper);
