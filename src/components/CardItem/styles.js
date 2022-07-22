import styled from "styled-components";


export const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  width: 262px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 100%;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`;

export const Name = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Description = styled.div`
  margin-bottom: 5px;
  word-break: break-all;
`;

export const Item = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-decoration: none;
`;
