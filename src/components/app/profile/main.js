import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

import AddPet from "./addpet";
import Profile from "./profile";
import Edit from "./edit";

const styles = theme => ({});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "profile"
    };
  }
  render() {
    // const changeTitle = this.props;
    return (
      <div
        style={{
          // position: "fixed",
          background: "transparent"
        }}
      >
        <div
          style={{
            // position: "absolute",
            // width: "65vw",
            // position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"

            // maxWidth:200
          }}
        >
          <div
            style={{
              marginTop: 30,
              backgroundColor: "#fff",
              borderRadius: 10,
              maxHeight: 550,
              maxWidth: 350,
              overflow: "auto"
            }}
          >
            {this.state.active == "profile" ? <Profile /> : <Edit />}

            <div
              style={{
                position: "sticky",
                bottom: 0,
                // bottom: 10,
                right: "50%",
                // backgroundColor:"gray",
                width: "100%",
                textAlign: "center"
                // zIndex: 100000
              }}
            >
              {this.state.active == "profile" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.setState({ active: "edit" });
                    // this.changeTitle("sadfa");
                  }}
                >
                  Edit
                </Button>
              )}
              {this.state.active == "edit" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.setState({ active: "profile" });
                    // this.props.changeTitle("dfdf");
                  }}
                >
                  Save
                </Button>
              )}
            </div>
          </div>
          <div style={{ position: "fixed", right: 10, top: 30 }}>
            {/* <Button
              style={{
                borderRadius: 20
              }}
              variant="contained"
              color="primary"
            >
              ADD PET
            </Button> */}
            {this.state.active == "profile" && <AddPet />}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
