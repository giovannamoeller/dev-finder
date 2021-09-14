import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 1024px;
`;

export const Box = styled.div`
  padding: 1.5rem;
  ${({ theme }) => {
    return css`
      background: ${theme.background};
    `;
  }}
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
