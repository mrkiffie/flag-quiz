import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "text",
  autoFocus: true
})`
  font-size: 1.5em;
  width: 80%;
  flex-grow: 1;
  flex-shrink: 1;
  margin: 0 auto;
  padding: 10px;
  border: none;
  outline: 0;
  border-radius: 2px;
  border-bottom: 3px solid transparent;

  &:focus {
    border-bottom-color: #08f;
  }
`;
