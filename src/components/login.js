import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  TextField
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  closeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    color: theme.palette.secondary.main
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isopen: false, email: "" };
  }

  componentDidMount() {
    console.log("component did mount");
  }

  handleChange = e => {
    this.setState({ email: e.target.value });
  };

  handleLogin = () => {
    console.log("login");
    const data = {
      email: this.state.email
    };
    localStorage.setItem("user", JSON.stringify(data));
  };

  handleClose = () => {
    this.setState({ isopen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="contained"
          onClick={() => this.setState({ isopen: true })}
          color="secondary"
        >
          Login
        </Button>
        <Dialog
          open={this.state.isopen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          maxWidth="xs"
        >
          <DialogTitle>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Login
            </Typography>
            <IconButton
              size="small"
              aria-label="close"
              className={classes.closeButton}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <form noValidate autoComplete="off">
              <TextField
                id="email"
                type="email"
                margin="dense"
                label="Email"
                variant="filled"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                id="password"
                type="password"
                margin="dense"
                label="Password"
                variant="filled"
                fullWidth
              />

              <Button
                style={{ borderRadius: 20, margin: "20px 0" }}
                // type="submit"
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
                onClick={this.handleLogin}
              >
                Login
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
