import React, { Component } from 'react';
import { MediaObject, Badge, MediaObjectSection, Column, Thumbnail, Colors } from 'react-foundation';
import moment from 'moment';
import { connect } from 'react-redux';
import { checkStatus } from '../../actions/people';

class PersonCard extends Component {
  componentWillMount() {
    this.checkStatus();
    const intervalId = setInterval(this.checkStatus.bind(this), 5000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  checkStatus() {
    this.props.checkStatus(this.props.person);
  }

  statusBadge() {
    const person = this.props.person;
    if (person.checkError) {
      return (<Badge color={Colors.ALERT}>&nbsp;</Badge>);
    }

    if (!this.isAtTheOffice()) {
      return (<Badge color={Colors.WARNING}>&nbsp;</Badge>);
    }

    return (<Badge color={Colors.SUCCESS}>&nbsp;</Badge>);
  }

  lastSeenAt() {
    const person = this.props.person;
    return person.lastSeenAt ? person.firstSeenAt.format('HH:mm:ss') : '-';
  }

  isAtTheOffice() {
    const person = this.props.person;
    if (!person.firstSeenAt) {
      return false;
    }

    return person.firstSeenAt.date() === moment().date();
  }

  worktimeDescription() {
    const person = this.props.person;
    if (person.checkError) {
      return 'Unable to check';
    }

    if (!this.isAtTheOffice()) {
      return 'Not at the office yet';
    }

    return `At the office since: ${this.lastSeenAt()}`;
  }

  render() {
    const person = this.props.person;
    return (
      <Column className="person-card" isColumn>
        <MediaObject>
          <MediaObjectSection>
            <Thumbnail width={150} src={person.photoUrl}/>
          </MediaObjectSection>
          <MediaObjectSection isMain>
            <h4>{person.name}</h4>
            <div>{this.worktimeDescription()}</div>
            <div> {this.statusBadge()}</div>
          </MediaObjectSection>
        </MediaObject>
      </Column>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkStatus: (person) => {
      dispatch(checkStatus(person));
    }
  };
}

export default connect(null, mapDispatchToProps)(PersonCard);
