import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 1024px;
`;

export const Box = styled.div`
  ${({ themeMode }) => {
    return themeMode.mode === 'Light' ? css`
      background: #F5F8FF;
    ` : css`
      background: #151C30;
    `
  }}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;