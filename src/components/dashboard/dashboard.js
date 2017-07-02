import React, { Component } from 'react';
import { Row } from 'react-foundation';
import PersonCard from '../person-card/person-card';
import { connect } from 'react-redux';
import { refreshList } from '../../actions/slack-users';

class Dashboard extends Component {
  componentWillMount() {
    this.props.refreshSlackUsers();
    const intervalId = setInterval(this.props.refreshSlackUsers.bind(this), 10000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const people = this.props.people;
    return (
      <div className="dashboard">
        <h1 className="app-title">Office list</h1>
        <Row upOnSmall={1} upOnMedium={2} upOnLarge={3}>
          {
            Object.keys(people).map((id) => <PersonCard key={id} person={people[id]} slackUsers={this.props.slackUsers}/>)
          }
        </Row>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    people: store.people.people,
    slackUsers: store.slackUsers
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshSlackUsers: () => {
      dispatch(refreshList());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
