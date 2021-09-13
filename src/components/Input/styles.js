import styled, { css } from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;

  ${({ theme }) => {
      return css`
        background: ${theme.backgroundContainer};
        box-shadow: ${theme.boxShadow};
        color: ${theme.background};
      `;
  }}
  
  input {
    width: 100%;
    height: 80%;
    background: none;
    outline: none;
    border: none;
    ${({ theme }) => {
      return css`
        color: ${theme.defaultColor};
      `;
    }}
  }

  button {
    height: 2.5rem;
    width: 8rem;
    margin-right: 0.75rem;
    background: #2778FF;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: #FFF;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #195BCB;
    }
  }

  svg {
    margin: 0 2rem;
  }
`;

