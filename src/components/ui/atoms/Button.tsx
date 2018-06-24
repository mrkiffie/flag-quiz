import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  background: none;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin: 0;
  padding: 12px 15px;
  outline: none;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  overflow: visible;
  line-height: 1.5;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  width: 100%;
  text-align: left;
  justify-content: space-between;
  align-items: center;

  &:focus,
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  ${ButtonStyle};
  ${(p: { autoWidth?: boolean }) =>
    p.autoWidth &&
    css`
      margin: 0 auto;
      width: auto;
      min-width: 8em;
      justify-content: center;
      align-items: center;
    `};
`;

export const IconButton = styled.button`
  ${ButtonStyle};
  width: auto;
  border-radius: 50%;
  padding: 10px;

  & svg {
    display: block;
    height: 24px;
    width: 24px;
  }
`;
