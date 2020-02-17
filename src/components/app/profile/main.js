import React from "react";
import { withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import {
  Typography,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Snackbar
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

import BootstrapInput from "../../bootstrapInput";

// import AddPet from "./addpet";
import Profile from "./profile";
import Edit from "./edit";
import Add from "./add";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: "#fff"
  },
  body: {
    //body dialog
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    textAlign: "center",
    padding: 20
  }
});



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "profile",
      isPremium: false,
      isOpen: false,
      isAlert: false
    };
  }
  render() {
    // const changeTitle = this.props;
    const { classes, setTitle } = this.props;
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
              height:"85vh",
              // maxHeight: 550,
              maxWidth: 350,
              overflow: "auto"
            }}
          >
            {this.state.active == "profile" && <Profile />}
            {this.state.active == "edit" && <Edit />}
            {this.state.active == "add" && <Add />}

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
                    this.props.onTitle("Edit Profile Pet");
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
                    this.props.onTitle("Profile Pet");

                    // this.props.changeTitle("dfdf");
                  }}
                >
                  Save
                </Button>
              )}
              {this.state.active == "add" && (
                <Button
                  style={{ borderRadius: 20, margin: "10px 0" }}
                  size="large"
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    this.setState({ active: "profile" });
                    this.props.onTitle("Profile Pet");

                    // this.props.changeTitle("dfdf");
                  }}
                >
                  Save New Pet
                </Button>
              )}
            </div>
          </div>
          <div style={{ position: "fixed", right: 10, top: 30 }}>
           
           {this.state.active=="profile" && (<Button
              style={{
                borderRadius: 20
              }}
              variant="contained"
              color="primary"
              onClick={() => {
                // this.props.onTitle("edit");
                if (this.state.isPremium == false) {
                  ///open model
                  this.setState({ isOpen: true });
                } else {
                  this.setState({ active: "add" });
                  this.props.onTitle("Add Profile Pet");

                }
              }}
            >
              ADD PET
            </Button>) }

            <Dialog
              open={this.state.isOpen}
              onClose={() => this.setState({ isOpen: false })}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              maxWidth="xs"
            >
              <div className={classes.body}>
                <DialogTitle>
                  <Typography
                    variant="h3"
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    Premium
                  </Typography>
                  <IconButton
                    size="small"
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={() => {
                      this.setState({ isOpen: false });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>
                <DialogContent>
                  <Typography variant="h6" color="inherit">
                    Upgrade Breednder mu dan nikmati fitur-fitur <b>PRO.</b>
                  </Typography>
                  <Typography variant="subtitle1" color="inherit">
                    <b>Breednder : 081234567890</b>
                  </Typography>
                  <BootstrapInput
                    type="number"
                    placeholder="No. Rek Kamu"
                    fullWidth
                    style={{ margin: "20px 0 20px 0" }}
                  />

                  <div>
                    <label htmlFor="contained-button-file">
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.79)" }}
                        component="span"
                      >
                        {/* <CameraAltOutlinedIcon style={{ fontSize: 175,color:"rgba(153, 153, 153, 0.73)" }} /> */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}
                        >
                          <CameraAltOutlinedIcon
                            style={{
                              fontSize: 175,
                              color: "rgba(0, 0, 0, 0.54)"
                              // color: "#000"
                            }}
                          />
                          <div
                            style={{
                              color: "rgba(0, 0, 0, 0.54)"
                              //color: "#000"
                            }}
                          >
                            <b>Upload Bukti Transfer</b>
                          </div>
                        </div>
                      </Button>
                    </label>
                    <input
                      style={{ display: "none" }}
                      accept="image/*"
                      // className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </div>

                  <Button
                    onClick={() => {
                      this.setState({ isOpen: false, isAlert: true });
                    }}
                    style={{
                      borderRadius: 20,
                      padding: "10px 100px",
                      margin: "20px 0 20px 0"
                    }}
                    color="default"
                    variant="contained"
                  >
                    Kirim
                  </Button>
                </DialogContent>
              </div>
            </Dialog>
            <Snackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              open={this.state.isAlert}
              //autoHideDuration={6000}
              onClose={() => this.setState({ isAlert: false, isPremium: true })}
            >
              <Alert
                onClose={() =>
                  this.setState({ isAlert: false, isPremium: true })
                }
                severity="success"
              >
                Terimakasih silahkan tunggu konfirmasi pembayaran
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
