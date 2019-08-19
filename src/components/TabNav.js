import React, { useState } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav(props) {
  // console.log(activeItem);

  function handleItemClick(name) {
    props.setActiveItem(name);
  }

  return (
    <Menu tabular>
      <NavLink to="./">
        <Menu.Item
          name="Home Page"
          active={props.activeItem === "Home Page"}
          onClick={() => handleItemClick("Home Page")}
        >
          <Icon name="home" />
          Home Page
        </Menu.Item>
      </NavLink>
      <NavLink to="/characters">
        <Menu.Item
          name="Characters"
          active={props.activeItem === "Characters"}
          onClick={() => handleItemClick("Characters")}
        >
          <Icon name="users" />
          Characters
        </Menu.Item>
      </NavLink>
      <NavLink to="/locations">
        <Menu.Item
          name="Locations"
          active={props.activeItem === "Locations"}
          onClick={() => handleItemClick("Locations")}
        >
          <Icon name="map outline" />
          Locations
        </Menu.Item>
      </NavLink>
      <NavLink to="/episodes">
        <Menu.Item
          name="Episodes"
          active={props.activeItem === "Episodes"}
          onClick={() => handleItemClick("Episodes")}
        >
          <Icon name="film" />
          Episodes
        </Menu.Item>
      </NavLink>
    </Menu>
  );
}
