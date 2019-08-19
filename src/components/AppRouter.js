import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

function AppRouter(props) {
  console.log(props.activeItem + " The Activeness");
  return (
    <div>
      <Route
        path="/"
        component={props.activeItem === "Home Page" ? WelcomePage : null}
      />
      <Route
        exact
        path="/characters"
        component={props.activeItem === "Characters" ? CharacterList : null}
      />
      <Route
        exact
        path="/locations"
        component={props.activeItem === "Locations" ? LocationList : null}
      />
      <Route
        exact
        path="/episodes"
        component={props.activeItem === "Episodes" ? EpisodeList : null}
      />
    </div>
  );
}

export default AppRouter;
