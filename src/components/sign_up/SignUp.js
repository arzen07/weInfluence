import React, { useCallback } from "react";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { withRouter } from "react-router";
import firebase from "../../core/firebase"


const SignUp = ({ history }) => {

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



  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value).then((val)=> firebase.firestore().collection("Users").doc(val.user.uid).set({
          email: email.value,
          full_name:name.value,
          id:val.user.uid
        }).then((val)=>console.log("recorded")).catch( function(error){
          console.log(error);
        }) );
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>

      <Form onSubmit={handleSignUp}>
        <h3>Sign Up</h3>
        <Form.Group>
          <FormLabel>
            Email </FormLabel>
          <FormControl name="email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Full Name </Form.Label>
          <Form.Control name="name" type="name" placeholder="Full Name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>

        <button type="submit" className="btn btn-primary b">Sign Up</button>
      </Form>
    </div>
  );
}
//hoc
export default withRouter(SignUp);