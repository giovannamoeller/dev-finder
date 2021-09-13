import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  span {
    ${({ theme, themeMode }) => {
      return css`
        color: ${theme[themeMode.mode].headerColor};
      `;
    }}
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    cursor: pointer;
    svg {
      margin-left: 1rem;
    }
  }
`;