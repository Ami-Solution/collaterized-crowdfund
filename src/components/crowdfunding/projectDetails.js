import React, { Component } from 'react';
// import { getEtherscanLink } from '../utils/web3Utils';

import { Segment, Message, Header, Item } from 'semantic-ui-react';

const project = {
    title: 'Test title',
    goal: 20,
    deadline: 20,
    creator: 'test',
    totalFunding: 10,
    contributionsCount: 10,
    contributorsCount: 10,
    fundingHub: 'test',
    address: 'test'
}

const balance = 5 
const currentBlock = 10

class ProjectDetails extends Component {
    render() {
        return (
            <div>
                <Message 
                    attached
                    content={'Project details'}/>
                <Segment attached>
                    <Header as={'h5'}>Contract address:</Header>
                    {/* <a href={getEtherscanLink(project.address)}>{project.address}</a> */}
                </Segment>
                <Segment attached>
                    <Header as={'h5'}>Raised:</Header>
                    {project.totalFunding} ETH
                </Segment>
                <Segment attached>
                    <Header as={'h5'}>Remaining blocks:</Header>
                    {project.deadline - currentBlock}
                </Segment>
                <Segment attached>
                    <Header as={'h5'}>Contributors:</Header>
                    {project.contributorsCount}
                </Segment>
                <Segment attached>
                    <Item>
                        <Item.Extra>
                            <Header as={'h5'}>Contributions:</Header>
                        </Item.Extra>
                        <Item.Extra>
                            {project.contributionsCount}
                        </Item.Extra>
                    </Item>
                </Segment>
                <Segment attached>
                    <Header as={'h5'}>Creator:</Header>
                    {/* <a href={getEtherscanLink(project.creator)}>{project.creator}</a> */}
                </Segment>
                <Segment attached={'bottom'}>
                    <Header as={'h5'}>Balance</Header>
                    { balance } ETH
                </Segment>
            </div>
        )
    }
}

export default ProjectDetails;