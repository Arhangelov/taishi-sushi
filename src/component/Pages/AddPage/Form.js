import React, { useState } from "react";
import {addSushi} from '../../../services/addSushi'
import {
  FormTitle,
  Container,
  Form as FormStyled,
  Input,
  SubmitBtn,
} from "./AddElements";

const Form = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [portion, setPortion] = useState('')
  const [price, setPrice] = useState('')
  const [imageName, setImageName] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()

    addSushi({title, description, portion, price, imageName})
    .then(res => console.log(res))
  }

  return (
    <Container>
      <FormStyled onSubmit={onSubmitHandler}>
        <FormTitle>Create Sushi</FormTitle>
        <Input onChange={e => setTitle(e.target.value)} value={title} name="title" placeholder="Title" />
        <Input onChange={e => setDescription(e.target.value)} value={description} name="description" placeholder="Description" />
        <Input onChange={e => setPortion(e.target.value)} value={portion} name="portion" placeholder="Portion" />
        <Input onChange={e => setPrice(e.target.value)} value={price} name="price" placeholder="Price" />
        <Input onChange={e => setImageName(e.target.value)} value={imageName} name="imageName" placeholder="Image Name" />
        <SubmitBtn>SUBMIT</SubmitBtn>
      </FormStyled>
    </Container>
  );
}
export default Form;