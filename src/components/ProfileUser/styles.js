import styled, { css } from "styled-components";

export const ProfileUserContainer = styled.section`
  padding: 3rem;
  width: 100%;
  display: flex;
  margin-top: 3rem;
  border-radius: 0.5rem;

  ${({ theme, themeMode }) => {
    return css`
      background: ${theme[themeMode.mode].backgroundContainer};
      box-shadow: ${theme[themeMode.mode].boxShadow};
      color: ${theme[themeMode.mode].titleColor};
    `;
  }}
`;

export const ImageContainer = styled.div`
  max-width: 20%;
  height: 100%;
  margin-right: 3rem;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 80%;

  & .nameInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    span {
      &.date {
        color: #a4a4a4;
      }
      color: #2778ff;
    }
  }

  & .profileInfo {
    span {
      ${({ theme, themeMode }) => {
        return css`
          color: ${theme[themeMode.mode].defaultColor};
        `;
      }}
    }

    .profile__infos {
      margin-top: 2rem;
      ${({ theme, themeMode }) => {
        return css`
          background: ${theme[themeMode.mode].profileBackground};
        `;
      }}
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      padding: 1rem;
      border-radius: 0.5rem;
      .repos,
      .followers,
      .following {
        display: flex;
        flex-direction: column;
        strong {
          font-size: 1.5rem;
          margin-top: 1rem;
        }
      }
    }

    .personal__infos {
      margin-top: 4rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      div > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        font-size: 0.9rem;
      }
    }
  }
`;
