import styled from "styled-components";

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 64px;
  padding: 0 0.5em;

  font-family: Roboto, sans-serif;
  background: #08f;
  color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  font-weight: 300;
`;
Toolbar.displayName = "Toolbar";
