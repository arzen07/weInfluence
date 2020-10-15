import { Button, Container, Icon, IconButton, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { withRouter } from "react-router";
import firebase from "../../core/firebase"
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Visibility } from "@material-ui/icons";
import { ErrorBanner } from "../../core/shared";
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
  const [passwordError, setPasswordError] = useState({
    passwordError: false,
    passwordMessage: ""
  });
  const [nameError, setNameError] = useState({
    nameError: false,
    nameMessage: ""
  });
  const [emailError, setEmailError] = useState({
    emailError: false,
    emailMessage: ""
  });

  const [signUpError, setSignUpError] = useState(false);
  // const [values, setValues] = useState({
  //   password: "",
  //   showPassword: false
  // });
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
  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  const handleClose = () => {
    setSignUpError(false);
  }

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    if (validateForm(event)) {
      const { email, password, name } = event.target.elements;
     
      try {

        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value).then((val) => firebase.firestore().collection("Users").doc(val.user.uid).set({
            email: email.value,
            full_name: name.value,
            id: val.user.uid
          }).then((val) => history.push("/")).catch(function (error) {
            console.log(error);
          })).catch(function (error) {
           
            switch (error.code) {
              case "auth/email-already-in-use":
                setSignUpError(true);
                break;
            }
          });
        
      } catch (error) {
        alert(error);
      }
    }
  }, [history]);


  const validateForm = (event) => {
    event.preventDefault();
    let isValid = true;
    let tempPassword = event.target.elements.password.value;
    let tempConfirmPassword = event.target.elements.confirm_password.value;
    let tempEmail = event.target.elements.email.value;
    let tempName = event.target.elements.name.value;

    if ((tempPassword.length < 6) || (tempConfirmPassword.length < 6)) {
      isValid = false;
      console.log("invalid");
      setPasswordError({ passwordError: true, passwordMessage: "Please enter password length greater than 6" });

    } else {
      if(tempPassword!==tempConfirmPassword){
        isValid=false;
        setPasswordError({ passwordError: true, passwordMessage: "Please not same!" });
      }else {
        setPasswordError({ passwordError: false, passwordMessage: "" });
      }
      
    }
   

    if (typeof tempEmail !== "undefined") {
     
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      console.log(tempEmail);
      if (!pattern.test(tempEmail)) {
      
        isValid = false;
        setEmailError({ emailError: true, emailMessage: "Please enter valid email" });
      } else {
        setEmailError({ emailError: false, emailMessage: "" });

      }
    }else {
      isValid = false;
    }
     console.log(isValid);
    if (tempName.length < 6) {
      isValid = false;
      setNameError({ nameError: true, nameMessage: "Please enter valid name" });
    } else {
      setNameError({ nameError: false, nameMessage: "" });

    }

    return isValid;
  }


  return (
    <Container maxWidth="sm" >

      <Form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <Form.Group>

          <TextField error={nameError.nameError} helperText={nameError.nameMessage} fullWidth variant="outlined" margin="dense" label="Full Name" name="name" type="name" />
        </Form.Group>
        <Form.Group>

          <TextField error={emailError.emailError} helperText={emailError.emailMessage} fullWidth variant="outlined" margin="dense" label="Email" name="email"  />
        </Form.Group>

        <Form.Group>

          <TextField error={passwordError.passwordError} helperText={passwordError.passwordMessage} fullWidth variant="outlined" margin="dense" label="Password" name="password" type="password" />
        </Form.Group>
        <Form.Group>

          <TextField error={passwordError.passwordError} helperText={passwordError.passwordMessage} fullWidth variant="outlined" margin="dense" label="Confirm Password" name="confirm_password" type="password" />
        </Form.Group>
        {/* <TextField  fullWidth variant="outlined" margin="dense" label="password" name="password" type="password"  /> */}


        <Button variant="contained" margin="dense" color="primary" type="submit" className="btn btn-primary b">Sign Up</Button>
      </Form>
      {signUpError ? ErrorBanner("error", "Email already exist", handleClose, signUpError) : null}
    </Container>
  );
}
//hoc
export default withRouter(SignUp);