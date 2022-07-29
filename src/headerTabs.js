import './App.scss';
import React from 'react';
import styled from 'styled-components';

const Tab = styled.div`
    :hover {
        cursor: pointer;
    }
`;

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1.45px solid #000;
    margin: 0 20px;
    padding: 3px 0;

`

class Tabs extends React.Component {
    render() {
        return (
            <TabContainer>
                <Tab>About Me</Tab>
                <Tab>Job Experience</Tab>
            </TabContainer>
        );
    }
}

export default Tabs;