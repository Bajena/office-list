import React, { Component } from 'react';
import { Row } from 'react-foundation';
import PersonCard from '../person-card/person-card';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const people = this.props.people;
    return (
      <div className="dashboard">
        <Row upOnSmall={1}>
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
