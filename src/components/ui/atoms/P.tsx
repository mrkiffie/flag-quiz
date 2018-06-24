import styled, {css} from "styled-components";

interface IP {
  center?: boolean;
}

export const P = styled.p`
  margin: 0 auto 1.5em;
  max-width: 90%;
  width: 35em;
  ${(p: IP) => p.center && css`
    text-align: center;
  `}
`;
