import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;

  span {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    svg {
      margin-left: 1rem;
    }
  }
`;