import React, { Component } from 'react';
import { MediaObject, Badge, MediaObjectSection, Column, Thumbnail, Button, Colors } from 'react-foundation';
import { connect } from 'react-redux';
import { checkStatus } from '../../actions/people';

class PersonCard extends Component {
  statusBadge() {
    const person = this.props.person;
    if (person.checkError) {
      return (<Badge color={Colors.ALERT}>&nbsp;</Badge>);
    }

    if (person.isChecking || !person.lastSeenAt) {
      return (<Badge color={Colors.WARNING}>&nbsp;</Badge>);
    }

    return (<Badge color={Colors.SUCCESS}>&nbsp;</Badge>);
  }

  lastSeenAt() {
    const person = this.props.person;
    return person.lastSeenAt ? person.lastSeenAt.format() : '-';
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
            <h4>{person.name} {this.statusBadge()}</h4>
            <div>Last seen at: {this.lastSeenAt()}</div>
            <div>
              <Button color={person.isChecking ? Colors.SUCCESS : Colors.ERROR} onClick={() => { this.props.checkStatus(person); }}>Check status</Button>
            </div>
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
