import styled from "styled-components";

export const InputContainer = styled.form`
  width: 100%;
  height: 4rem;
  background: #1F2A48;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0px 100px 80px rgba(12, 12, 37, 0.11), 0px 64.8148px 46.8519px rgba(12, 12, 37, 0.0835185), 0px 38.5185px 25.4815px rgba(12, 12, 37, 0.0668148), 0px 20px 13px rgba(12, 12, 37, 0.055), 0px 8.14815px 6.51852px rgba(12, 12, 37, 0.0431852), 0px 1.85185px 3.14815px rgba(12, 12, 37, 0.0264815);
  
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

