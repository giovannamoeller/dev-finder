import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 1024px;
`;

export const Box = styled.div`
  ${({ theme, themeMode }) => {
    return css`
      background: ${theme[themeMode.mode].background};
    `;
  }}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
