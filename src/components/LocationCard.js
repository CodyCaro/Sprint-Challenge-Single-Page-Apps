import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {type} - {dimension}
          </span>
        </Card.Meta>
        <Card.Description />
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="users" />
          {residents} residents
        </a>
      </Card.Content>
    </Card>
  );
}
