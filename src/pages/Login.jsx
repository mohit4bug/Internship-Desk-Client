import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"


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
    min-width: 400px;

    @media (max-width:510px) {
        width: 100%;
        height: 100%;
        border: none;
    }
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


const Login = () => {
    return (
        <Container>
            <Form>
                <InputDiv>
                    <Label htmlFor='eduEmail'>Email</Label>
                    <Input id='eduEmail' type="email" placeholder='RegNo@poornima.edu.in' />
                </InputDiv>
                <InputDiv>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' type="password" placeholder='Must be atleast 8 characters' />
                </InputDiv>
                <InputDiv>
                    <Button type='submit'>Login</Button>
                </InputDiv>
                <P>New to Internship desk? <Link to="/register">Register</Link></P>

            </Form>
        </Container>
    )
}

export default Login