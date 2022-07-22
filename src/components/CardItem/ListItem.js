import React from "react";
import {
  ItemContainer,
  Item,
  Name,
  Description,
} from "./styles";
import GetData from "../../productsCategory.json";
import { Image } from "react-bootstrap";

function ListItem() {
  return (
    <Item>
      {GetData.data.nodes.map((item, i) => (
        <ItemContainer>
          {item.images.map((e, i) => (
            <Image
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "50%",
              }}
              src={e.asset.url}
              alt={e.alt}
              width="100"
            ></Image>
          ))}
          <Name>{item.name}</Name>
          <Description> {item.shortDescription}</Description>
          <Name> {item.category.name}</Name>
        </ItemContainer>
      ))}
    </Item>
  );
}

export default ListItem;
