import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;

  span {
    ${({ themeMode }) => {
      return themeMode.mode === 'Light' ? css`
        color: #151C30;
      ` : css`
        color: #FFFFFF;
      `
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