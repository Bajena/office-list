import React, { Component } from 'react';
import { MediaObject, Badge, MediaObjectSection, Column, Thumbnail } from 'react-foundation';

class PersonCard extends Component {
  render() {
    return (
      <Column className="person-card" isColumn>
        <MediaObject>
          <MediaObjectSection>
            <Thumbnail width={150} src={this.props.photoUrl}/>
          </MediaObjectSection>
          <MediaObjectSection isMain>
            <h4>{this.props.name}</h4>
            <Badge>1</Badge>
          </MediaObjectSection>
        </MediaObject>
      </Column>
    );
  }
}

export default PersonCard;
