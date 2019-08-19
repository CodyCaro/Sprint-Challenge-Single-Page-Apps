import React, { useState } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
  const [activeItem, setActiveItem] = useState("Home Page");

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <Menu tabular>
      <NavLink to="">
        <Menu.Item
          name="Home Page"
          active={activeItem === "Home Page"}
          onClick={() => handleItemClick("Home Page")}
        >
          Home Page
        </Menu.Item>
      </NavLink>
      <NavLink to="./characters">
        <Menu.Item
          name="Characters"
          active={activeItem === "Characters"}
          onClick={() => handleItemClick("Characters")}
        >
          Characters
        </Menu.Item>
      </NavLink>
      <NavLink to="./locations">
        <Menu.Item
          name="Locations"
          active={activeItem === "Locations"}
          onClick={() => handleItemClick("Locations")}
        >
          Locations
        </Menu.Item>
      </NavLink>
      <NavLink to="./episodes">
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
