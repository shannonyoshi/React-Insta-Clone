import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 0.5em;

  ${props =>
    props.wide &&
    css`
      width: 95%;
      border: none;
      padding: 1em;
      border-top: 1px solid lightgray;
    `}
`;

export const Username = styled.p`
  font-weight: bolder;
  margin: 0px;

  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}
`;

export const UserPic = styled.img`
  border-radius: 50%;
  padding: 0.5em;
  width: 2em;
  height: 2em;

  ${props =>
    props.large &&
    css`
      width: 6em;
      height: 6em;
    `}
`;
