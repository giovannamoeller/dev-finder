import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  span {
    ${({ theme }) => {
      return css`
        color: ${theme.headerColor};
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

  @media screen and (max-width: 520px) {
    img {
      width: 24%;
    }
    span {
      font-size: 80%;
    }

    svg {
      width: 20px;
    }
  }
`;