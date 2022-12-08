import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Nav = styled.nav`
    height: 60px;
    background: white;
    border-bottom: 1px solid lightgray;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    background:#7952B3;
    position: relative;
    justify-content: space-between;
`
const Logo = styled.h1`
    font-size: 25px;
    font-weight: 500;
`

const NavList = styled.ul`
    padding: 0px 10px;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    list-style: none;
`
const Profile = styled.li`
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    border: 2px solid white;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
`
const Menu = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    height: 300px;
    width: 250px;
    background: white;
    z-index: 999;
    -webkit-box-shadow: -1px 6px 20px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 6px 20px -6px rgba(0,0,0,0.75);
    box-shadow: -1px 6px 20px -6px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 8px;
`

const Name = styled.div`
    font-weight: 600;
    font-size: 15px;
`
const Email = styled.div`
    font-size: 15px;
`
const MenuList = styled.ul` 
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
`
const MenuItem = styled.li` 
    width: 100%;
    font-weight: 500;
    color:#505050;
    &:hover{
        color: #7952B3;
        cursor: pointer;
    }   
`

const Navbar = () => {

    const [menu, setMenu] = useState(false)
    return (
        <Nav onMouseLeave={e => setMenu(false)}>
            <Logo><Link style={{ color: "white" }} to="/">INTERNSHIP DESK</Link></Logo>
            <NavList>

                <Profile onMouseOver={e => setMenu(true)}>M</Profile>
            </NavList>

            {
                menu && (
                    <Menu>
                        <Name>Mohit khatri</Name>
                        <Email>Mohit4bug@gmail.com</Email>
                        <hr />
                        <MenuList>
                            <MenuItem>
                                My application
                            </MenuItem>
                            <MenuItem>
                                Edit resume
                            </MenuItem>
                            <MenuItem>
                                Logout
                            </MenuItem>
                            <MenuItem>
                                Delete my account.
                            </MenuItem>
                        </MenuList>
                    </Menu>
                )
            }
        </Nav>
    )
}

export default Navbar