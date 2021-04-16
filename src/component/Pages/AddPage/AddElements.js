import styled from 'styled-components'

export const FormTitle = styled.h2`
  color: white;
  text-align: center;
  margin-top: 20px;
`

export const Container = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-left: 40%;

  font-family: Montserrat;
  font-style: light;
  font-weight: normal;
  // background: linear-gradient(#141e30, #243b55);
  `
  
  export const Form = styled.form`
  background: rgba(0,0,0,.5);
  width: 400px;
  height: 400px;
  text-align: center;
  top: 50%;
  box-shadow: 0 15px 15px #1B1B1B;
  background: linear-gradient(#141e30, #243b55);
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid white;
  background: transparent;
  margin-top: 30px;
  font-size: 16px;
  caret-color: white;
  height: 30px;
  width: 80%;
  color: white;
  
  &::placeholder {
    color: white;
    text-align: center;
  }
`

export const SubmitBtn = styled.button`
  background: transparent;
  border: 1px solid white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  color: white;
  margin: 40px 10px 0 10px;
  font-size: 16px;
`