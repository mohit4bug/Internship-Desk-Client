import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios";


const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;
`
const Form = styled.form`
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px;

    @media (max-width:510px) {
        width: 100%;
        height: 100%;
        border: none;
    }
`
const FlexDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 100%;
`
const Label = styled.label`
    font-size: 15px;
    font-weight: 500;
`
const Input = styled.input`
    border: 1px solid lightgray;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding-left: 10px;
    font-weight: 500;
    transition: all 0.2s cubic-bezier(0,0,0,0);
    outline: 1px solid transparent;
    

    &:hover , &:focus{
        border: 1px solid #7952B3;
        outline: 1px solid #7952B3;
    }
`
const Button = styled.button`
    height: 40px;
    width: 100%;
    border-radius: 10px;
    color: white;
    font-weight: 500;
    background: #7952B3;
    border: none;
    outline: none;
    font-size: 16px;
    cursor: pointer;
`
const P = styled.p`
    font-weight: 500;
    font-size: 15px;
`





const Register = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setInputs({
            ...inputs,
            [e.target.name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/auth/register", inputs)
            console.log(res.data);
        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <InputDiv>
                    <Label htmlFor='eduEmail'>Email</Label>
                    <Input onChange={handleChange} id='eduEmail' name='email' type="email" placeholder='RegNo@poornima.edu.in' />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor='password'>Password</Label>
                    <Input onChange={handleChange} id='password' name="password" type="password" placeholder='Must be atleast 8 characters' />
                </InputDiv>
                <FlexDiv>
                    <InputDiv>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input onChange={handleChange} id='firstName' name="firstName" type="text" placeholder='John' />
                    </InputDiv>
                    <InputDiv>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input onChange={handleChange} id='lastName' name="lastName" type="text" placeholder='Doe' />
                    </InputDiv>
                </FlexDiv>
                <InputDiv>
                    <Button type='submit'>Sign up</Button>
                </InputDiv>
                <P>Already registerd? <Link to="/login">Login</Link></P>

            </Form>
        </Container>
    )
}

export default Register