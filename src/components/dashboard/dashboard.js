import React, { Component } from 'react';
import { Row } from 'react-foundation';
import PersonCard from '../person-card/person-card';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Row upOnSmall={1}>
          <PersonCard name="Szymon Tymiński" photoUrl="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/13439193_1310043972359134_922822888142315783_n.jpg?oh=bba8fbc682ea19fb06bf540bdbc3e3f2&oe=59E5870B"/>
          <PersonCard name="Jan Bajena" photoUrl="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/040/119/1c7be58.jpg"/>
          <PersonCard name="Konrad Oleksiuk" photoUrl="https://s3.amazonaws.com/zerply-profile-images/0/5467/big.jpg?1388490409"/>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
