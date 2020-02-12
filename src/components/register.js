import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
  root: {
    textAlign: "center"
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    color: theme.palette.secondary.main
  }
  // formControl: {
  //   margin: theme.spacing(2),
  //   minWidth: 200,
  // },
});

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
      spesies: [
        { id: 1, name: "Bengal" },
        { id: 2, name: "Persia" },
        { id: 3, name: "Ige" },
        { id: 4, name: "Sirah" },
        { id: 5, name: "Mewong" }
      ],
      selectedSpesies: "",
    };
  }

  // componentDidMount(){
  //   console.log("didmount localstorage");
  // }

  handleClose = () => {
    this.setState({ isopen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          style={{ borderRadius: 20, paddingLeft: 50, paddingRight: 50 }}
          size="large"
          variant="contained"
          color="secondary"
          onClick={() => this.setState({ isopen: true })}
        >
          Register
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
              Register
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
                type="text"
                margin="dense"
                label="Breeder"
                variant="filled"
                fullWidth
              />
              <TextField
                type="email"
                margin="dense"
                label="Email"
                variant="filled"
                fullWidth
              />
              <TextField
                type="password"
                margin="dense"
                label="Password"
                variant="filled"
                fullWidth
              />
              <TextField
                type="text"
                margin="dense"
                label="Phone Breeder"
                variant="filled"
                fullWidth
              />
              <TextField
                type="text"
                margin="dense"
                label="Address Breeder"
                variant="filled"
                multiline //textarea render
                fullWidth
              />
              <TextField
                type="text"
                margin="dense"
                label="Name Pet"
                variant="filled"
                fullWidth
              />

              <TextField
                type="text"
                margin="dense"
                label="Gender Pet"
                variant="filled"
                fullWidth
              />

              <FormControl
                margin="dense"
                variant="filled"
                style={{ width: "100%" }}
              >
                <InputLabel id="select-spesies">Spesies Pet</InputLabel>
                <Select
                  labelId="select-spesies-label"
                  id="select-spesies"
                  value={this.state.selectedSpesies}
                  onChange={e =>
                    this.setState({ selectedSpesies: e.target.value })
                  }
                >
                  {this.state.spesies.map(item => {
                    return <MenuItem value={item.name}>{item.name}</MenuItem>;
                  })}
                  {/* <MenuItem value={0}>Male</MenuItem>
                  <MenuItem value={1}>Female</MenuItem> */}
                </Select>
              </FormControl>

              <TextField
                type="number"
                margin="dense"
                label="Age Pet"
                variant="filled"
                fullWidth
              />

              <Button
                style={{ borderRadius: 20, margin: "20px 0" }}
                fullWidth
                size="large"
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
