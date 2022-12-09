import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    min-height: calc(100vh - 200px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const Form = styled.form`
    width: 700px;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 30px;

    @media (max-width: 600px){
        
        width: 90%;
        border: none;
    }
    
`

const Label = styled.label`
    font-size: 15px;
    font-weight: 500;
`

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 100%;
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
    width: 120px;
    align-self: flex-end;
    border-radius:5px;
    font-size: 15px;
    color: white;
    font-weight: 500;
    background: #7952B3;
    border: none;
    outline: none;
    cursor: pointer;
`
const Heading = styled.h1`
    font-weight: 600;
    `

const WorkSample = () => {
    return (
        <Container>
            <Heading>Work samples</Heading>
            <Form>
                <InputDiv>
                    <Label>Blog link</Label>
                    <Input name='blog-link' placeholder='http://myblog.com' />
                </InputDiv>
                <InputDiv>
                    <Label>Github profile</Label>
                    <Input name='github-link' placeholder='http://github.com/my_profile' />
                </InputDiv>
                <InputDiv>
                    <Label>LinkedIn profile</Label>
                    <Input name='linkedIn-link' placeholder='https://linkedin.com/in/my_profile' />
                </InputDiv>
                <Button>Save & next</Button>
            </Form>
        </Container>
    )
}

export default WorkSample