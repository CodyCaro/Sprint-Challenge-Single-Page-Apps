import React from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";

function AppRouter() {
  return (
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/locations" component={LocationList} />
      {/* <Route path="" component={WelcomePage} /> */}
    </div>
  );
}

export default AppRouter;
