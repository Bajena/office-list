import React, { Component } from 'react';
import { Row } from 'react-foundation';
import PersonCard from '../person-card/person-card';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const people = this.props.people;
    return (
      <div className="dashboard">
        <h1 className="app-title">Office list</h1>
        <Row upOnSmall={1} upOnMedium={2} upOnLarge={3}>
          {
            Object.keys(people).map((id) => <PersonCard key={id} person={people[id]}/>)
          }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    people: store.people.people
  };
}

export default connect(mapStateToProps)(Dashboard);
