import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard({ name, airDate, characterCount }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{airDate}</span>
        </Card.Meta>
        <Card.Description />
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {characterCount} characters
        </a>
      </Card.Content>
    </Card>
  );
}
