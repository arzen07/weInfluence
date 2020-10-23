import { Button, Card, Container, FormControl, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, makeStyles, OutlinedInput, Snackbar, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import clsx from "clsx";
import React, { useCallback, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { withRouter, Redirect } from "react-router";
import firebase from "../../core/firebase"
import { AuthContext } from '../../core/services/Auth';
import { ErrorBanner } from '../../core/shared'


const useStyles = makeStyles({
  container: {
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderRadius: 8,
    marginTop: 15,
  },
  padding: {
    padding: 12,
  },

  labelErrorColor: {
    color: 'red'
  },
  labelColor: {
    color: 'black'
  }
})


const SignIn = ({ history }) => {

  const [fields, setFields] = useState({
    email: "",
    password: "",
    showPassword: false
  });

  const [emailError, setEmailError] = useState({
    emailError: false,
    emailMessage: "",
  });
  const [passwordError, setPasswordError] = useState({
    passwordError: false,
    passwordMessage: ""
  });

  const [loginError, setLoginError] = useState(false);

  const classes = useStyles();

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }

  const handleClose = () => {
    setLoginError(false);
  }



  // here event.target.element uses text field name to identify the object name like : name="email" so it maps with object name "email"
  // const handleLogin = useCallback(
  //   async event => {
  //     event.preventDefault();
  //     const { email, password } = event.target.elements;
  //     try {
  //       console.log(event.target.elements.password.value);
  //       await firebase
  //         .auth()
  //         .signInWithEmailAndPassword(email.value, password.value);
  //       history.push("/");
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [history]
  // );
  const handleClickShowPassword = () => {
    setFields({ ...fields, showPassword: !fields.showPassword });
  }
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();


    if (validateForm()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(fields.email, fields.password)
        .then((val) => {
          history.push('/');
        })
        .catch(err => {
         
          switch (err.code) {
            case "auth/invalid-email":
              setLoginError(true);
              break;
            case "auth/user-disabled":
              setLoginError(true);
              break;
            case "auth/user-not-found":
              setLoginError(true);
              break;
            case "auth/wrong-password":
              setLoginError(true);
              break;
            default:
              setLoginError(true);
              break;
          }
        });
    } else {
     // setLoginError(true);
    }

  }


  const validateForm = () => {
    let isValid = true;

    if (typeof fields.email !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields.email)) {

        setEmailError({ ...emailError, emailError: true, emailMessage: "Please enter valid email address" });
        isValid = false;
        //  console.log(error,"asd");


      } else {
        setEmailError({ ...emailError, emailError: false, emailMessage: "" });
        isValid = true;

      }
    } else {
      console.log("undifiend");
      setEmailError({ ...emailError, emailError: true, emailMessage: "Please enter email address" });
      isValid = false;

    }

    if (fields.password.length > 6) {

      setPasswordError({ ...passwordError, passwordError: false, passwordMessage: "" });
    } else {
      isValid = false;

      setPasswordError({ ...passwordError, passwordError: true, passwordMessage: "Please enter valid password" });
      // console.log(error,2);
    }
    return isValid;
  }
  return (
    <Container maxWidth="sm" className={clsx(classes.padding, classes.container)} >

      <h1>Log in</h1>

      <Form onSubmit={handleLogin} noValidate>
        <FormGroup>
          <TextField
            id="outlined-email"
            label="Email"
            margin="dense"
            variant="outlined"
            name="email"
            type="email"
            error={emailError.emailError}
            helperText={emailError.emailMessage}
            required
            style={{ color: "red" }}

            value={fields.email}
            onChange={(e) => {

              setFields({ ...fields, email: e.target.value })
            }}
          />
        </FormGroup>
        <FormGroup>
          <FormControl variant="outlined" margin='dense' required    >
            <InputLabel className={(emailError.emailError) ? classes.labelErrorColor : classes.labelColor} color={(emailError.emailError) ? "secondary" : "primary"} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              label="Password"
              name="password"
              error={passwordError.passwordError}


              value={fields.password}
              onChange={e => {

                setFields({ ...fields, password: e.target.value })
              }}
              type={fields.showPassword ? "text" : "password"}
              id="outlined-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {fields.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {passwordError.passwordError && <FormHelperText style={{ color: "red" }}>{passwordError.passwordMessage}</FormHelperText>}

          </FormControl>
        </FormGroup>




        <Button variant="contained" margin="dense" color="primary" type="submit" size="medium">Log in</Button>
      </Form>
      {/* <ErrorBanner /> */}
      {loginError && ErrorBanner("error", "PLease check entered email and password", handleClose, loginError)}
    </Container>
  );
}
export default withRouter(SignIn);