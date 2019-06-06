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

  ${props =>
    props.mediumWide &&
    css`
      width: 80%;
      border: 1px solid lightgray;
      border-radius: 10px;
      margin:.5em auto;
      padding: 1em;
      border-top: 1px solid lightgray;
      background-color: whitesmoke;
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
      width: 10em;
      height: 10em;
      padding: 30px;
    `}
`;
export const Button =styled.button`
    border-radius:10px;
    width:90%;
    padding:1em;
    background-color: #3897F0;
    margin:5px auto 20px auto;
    border:2px solid #3897F0;
    cursor:pointer;
    color:white;
    font-weight: bolder;
    font-size:.85em;

`;