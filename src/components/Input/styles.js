import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  height: 4rem;
  background: #1F2A48;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  
  input {
    width: 100%;
    height: 80%;
    background: none;
    outline: none;
    color: #FFF;
    border: none;
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
  }

  svg {
    margin: 0 2rem;
  }
`;

