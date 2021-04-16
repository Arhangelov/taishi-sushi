import {useState} from "react";
import { auth } from "../../../utils/firebase";
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
  Label
} from "./RegisterElements";

const Register = () => {

  // const [user, setUser] = useContext(Context);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');

  const onRegisterSubmitHandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const adress = e.target.adress.value;

    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log(userCredential);
      })
  }

  return (
    <Container>
      <FormStyled onSubmit={onRegisterSubmitHandler}>
        <FormTitle>Register</FormTitle>
        <Label htmlFor='email'>Email</Label>
        <Input  name='email' />
        <Label htmlFor='username'>Username</Label>
        <Input  name='username' />
        <Label htmlFor='password'>Password</Label>
        <Input type="password" name='password'/>
        <Label htmlFor='adress'>Adress</Label>
        <Input name='adress'/>
        {/* <Input placeholder="Repeat-Password" type="password" />
        <Input placeholder="Adress" /> */}
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
}
export default Register;
