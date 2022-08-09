import './App.scss';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import flower from './images/flower.svg';

const Tab = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
`;

function Header() {
    return (
        <div className="header">
            {/* <img className='flower' src={flower}></img>
            <span>emme erwin</span> */}
            <TabContainer>
                <NavLink to="/home">home</NavLink>
                <NavLink to="/about-me">about me</NavLink>
                <NavLink to="/resume">resume</NavLink>
            </TabContainer>
        </div>
    );
}

export default Header;
