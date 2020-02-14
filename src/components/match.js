import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import breeds from "../data/breeds.json";

const styles = theme => ({
  root: {
    display: "flex",

    //height: "auto",
    maxHeight: "100%",
    overflow: "auto",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& div": {
      // minWidth:80,
      // maxWidth:110,
      position: "relative",
      textAlign: "center",
      color: "white",
      height: 150,
      width: 125,
      margin: 7,
      backgroundColor: "gray",
      borderRadius: 10,
      "& img": {
        width: "100%",
        height: "100%",
        borderRadius: 10
      },
      "& section": {
        position: "absolute",
        bottom: 0,
        // left: 10,
        textAlign: "left",
        // paddingLeft: 5,
        width: "100%",
        background:
          "linear-gradient(to top, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0))",
        // background:"linear-gradient(red, yellow)",
        borderRadius: "0px 0px 10px 10px",
        "& h6": {
          paddingLeft: 10
        }
        //top: 0
      }
    }
  }
});

class Match extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {breeds.map((item, i) => {
          return (
            <>
              {item.pets.map((pet, index) => {
                return (
                  <div key={index}>
                    <img src={pet.images[0]} alt={pet.name} />
                    <section>
                      <Typography variant="subtitle2">
                        <b>{pet.name}</b>
                      </Typography>
                    </section>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(Match);
