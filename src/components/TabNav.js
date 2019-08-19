import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterCard from "./CharacterCard";

// TODO: Add missing tabs below
export default function TabNav() {
  const [activeItem, setActiveItem] = useState("Home Page");

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <Menu tabular>
      <NavLink to="" exact>
        <Menu.Item
          name="Home Page"
          active={activeItem === "Home Page"}
          onClick={() => handleItemClick("Home Page")}
        >
          Home Page
        </Menu.Item>
      </NavLink>
      <NavLink to="./characters" exact>
        <Menu.Item
          name="Characters"
          active={activeItem === "Characters"}
          onClick={() => handleItemClick("Characters")}
        >
          Characters
        </Menu.Item>
      </NavLink>
      <NavLink to="./locations" exact>
        <Menu.Item
          name="Locations"
          active={activeItem === "Locations"}
          onClick={() => handleItemClick("Locations")}
        >
          Locations
        </Menu.Item>
      </NavLink>
      <NavLink to="./episodes" exact>
        <Menu.Item
          name="Episodes"
          active={activeItem === "Episodes"}
          onClick={() => handleItemClick("Episodes")}
        >
          Episodes
        </Menu.Item>
      </NavLink>
    </Menu>
  );
}
