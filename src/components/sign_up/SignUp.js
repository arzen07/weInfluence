import { Button, Container, Icon, IconButton, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from "@material-ui/core";
import React, { useCallback,useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { withRouter } from "react-router";
import firebase from "../../core/firebase"
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Visibility } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 200,
    "&:hover .MuiInputLabel-root": {
      color: theme.palette.text.primary
    },
    "& .Mui-focused.MuiInputLabel-root": {
      color: theme.palette.primary.main
    }
  },
  outlinedInput: {
    "&:hover .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.text.primary
    },
    "&.Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root": {
      color: theme.palette.primary.main
    }
  }
}));

const SignUp = ({ history }) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false
  });
  const classes = useStyles();
  // const handleSignUp=(event)=> {
  //   event.preventDefault();
  //   firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((val)=> {
  //     history.push('/');
  //   })
  //   .catch(err => {
  //     switch (err.code) {
  //       case "auth/email-already-use":
  //       case "auth/invalid-email":
  //         setEmailError(err.message);
  //         break;
  //       case "auth/weak-password":
  //         setPasswordError(err.message);
  //         break;

  //     }
  //   });
  // };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };


  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value).then((val) => firebase.firestore().collection("Users").doc(val.user.uid).set({
          email: email.value,
          full_name: name.value,
          id: val.user.uid
        }).then((val) => console.log("recorded")).catch(function (error) {
          console.log(error);
        }));
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <Container maxWidth="sm" >

      <Form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <Form.Group>

          <TextField fullWidth variant="outlined" margin="dense" label="Email" name="email" type="email" />
        </Form.Group>

        <Form.Group>

          <TextField fullWidth variant="outlined" margin="dense" label="Full Name" name="name" type="name" />
        </Form.Group>

        
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              password
            </InputLabel>
            <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            className={classes.outlinedInput}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          </FormControl>
          {/* <TextField  fullWidth variant="outlined" margin="dense" label="password" name="password" type="password"  /> */}
        

        <Button variant="contained" margin="dense" color="primary" type="submit" className="btn btn-primary b">Sign Up</Button>
      </Form>
    </Container>
  );
}
//hoc
export default withRouter(SignUp);