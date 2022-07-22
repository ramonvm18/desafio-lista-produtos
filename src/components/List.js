import React from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import ListItem from "./CardItem/ListItem";

const ListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;

function List() {
  return (
    <ListContent>
      <ListItem />
    </ListContent>
  );
}

export default List;
