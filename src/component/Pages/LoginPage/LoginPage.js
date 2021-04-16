import React from "react";
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  Label
} from "./LoginElements";

import {auth} from '../../../utils/firebase';

const Login = () => {

  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
  
    console.log(username, password);

    auth.signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // console.log(userCredential);
      });
  };

  return (
    <Container>
      <FormStyled onSubmit={onLoginFormSubmitHandler}>
        <FormTitle>Login</FormTitle>
        <Label htmlFor="username">Username</Label>
        <Input name='username' />
        <Label htmlFor="password">Password</Label>
        <Input name='password' type="password" />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
}
export default Login;
