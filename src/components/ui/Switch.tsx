import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 6em;
  height: 3em;
  margin: 0 1em;
  font-size: 8px;
`;
Wrapper.displayName = "SwitchWrapper";

const Input = styled.input.attrs({
  type: "checkbox"
})`
  opacity: 0;
  outline: none;
  position: absolute;
`;
Input.displayName = "SwitchInput";

interface ITrackProps {
  checked?: boolean;
}
const Track = styled.div`
  position: absolute;
  display: inline-block;
  margin: 0.5em 0.5em;
  width: 5em;
  height: 2em;
  border-radius: 1em;
  background: transparent;
  opacity: 0.5;
  box-shadow: inset 0 0 0.25em rgba(0, 0, 0, 0.1);
  overflow: hidden;

  ::before {
    content: "";
    background: #08f;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -3em;
    top: 0;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateX(${(p: ITrackProps) => (p.checked ? "3em" : "0")});
  }
  ::after {
    content: "";
    background: #bdbdbd;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
    transform: translateX(${(p: ITrackProps) => (p.checked ? "3em" : "0")});
  }
`;
Track.displayName = "SwitchTrack";

interface IThumbProps {
  checked?: boolean;
}

const Thumb = styled.div`
  position: absolute;
  display: inline-block;
  width: 3em;
  height: 3em;
  background: ${(p: IThumbProps) => (p.checked ? "#08f" : "#f5f5f5")};
  border-radius: 50%;
  box-shadow: 0px 0.125em 0.75em rgba(0, 0, 0, 0.12),
    0px 0.125em 0.5em rgba(0, 0, 0, 0.12);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: translateX(${(p: IThumbProps) => (p.checked ? "3em" : "0")});
  z-index: 2;
`;
Thumb.displayName = "SwitchThumb";

interface ISwitchProps {
  checked: boolean;
  tabIndex?: number;
  onChange?: (event: any) => void;
}

export const Switch: React.SFC<ISwitchProps> = props => (
  <Wrapper>
    {/* <Input
      checked={props.checked}
      onChange={props.onChange}
      tabIndex={props.tabIndex}
    /> */}
    <Track checked={props.checked} />
    <Thumb checked={props.checked} />
  </Wrapper>
);
Switch.displayName = "Switch";
