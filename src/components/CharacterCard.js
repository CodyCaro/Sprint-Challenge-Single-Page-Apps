import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card>
      <Image src={props.characterData.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.characterData.name}</Card.Header>
        <Card.Meta>
          <span className="date">
            {props.characterData.species} {props.characterData.status}
          </span>
        </Card.Meta>
        <Card.Description>
          <p>Location: {props.characterData.location.name}</p>
          <p>Origin: {props.characterData.origin.name}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes
        </a>
      </Card.Content>
    </Card>
  );
}
