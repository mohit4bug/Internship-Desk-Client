import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import BuildIcon from '@mui/icons-material/Build';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';

const TrackerContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    overflow: scroll;
    padding-top: 50px;
    
    @media only screen and (max-width: 450px) {
        justify-content:flex-start;
        padding: 0px 20px;
        padding-top:50px;
    }
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-width: 100px;
`
const Logo = styled.span`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: white;
    background: #7952B3;
    cursor: pointer;
`
const Name = styled.p`
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`

const Tracker = () => {
    return (
        <TrackerContainer>
            <Item>
                <Link to="/dashboard">
                    <Logo>
                        <PersonIcon />
                    </Logo>
                </Link>
                <Name>Personal details</Name>
            </Item>
            <Item>
                <Link to="/educational">
                    <Logo>
                        <SchoolIcon />
                    </Logo>
                </Link>
                <Name>Education</Name>
            </Item>
            <Item>
                <Link to="/skills">
                    <Logo>
                        <BuildIcon />
                    </Logo>
                </Link>
                <Name>Skills</Name>
            </Item>
            <Item>
                <Link to="/worksample">
                    <Logo>
                        <ImportContactsRoundedIcon />
                    </Logo>
                </Link>
                <Name>Work sample</Name>
            </Item>
        </TrackerContainer>
    )
}

export default Tracker