import styled, { css } from "styled-components";

export const ProfileUserContainer = styled.section`
  padding: 3rem;
  width: 100%;
  display: flex;
  margin-top: 3rem;
  border-radius: 0.5rem;
  background: #1f2a48;
  box-shadow: 0px 100px 80px rgba(12, 12, 37, 0.11),
    0px 64.8148px 46.8519px rgba(12, 12, 37, 0.0835185),
    0px 38.5185px 25.4815px rgba(12, 12, 37, 0.0668148),
    0px 20px 13px rgba(12, 12, 37, 0.055),
    0px 8.14815px 6.51852px rgba(12, 12, 37, 0.0431852),
    0px 1.85185px 3.14815px rgba(12, 12, 37, 0.0264815);

  ${({ themeMode }) => {
    return themeMode.mode === "Light"
      ? css`
          background: #ffffff;
          box-shadow: 0px 100px 80px rgba(21, 28, 48, 0.03),
            0px 36.5016px 29.2013px rgba(21, 28, 48, 0.0206994),
            0px 17.7209px 14.1767px rgba(21, 28, 48, 0.0166887),
            0px 8.6871px 6.94968px rgba(21, 28, 48, 0.0133113),
            0px 3.43489px 2.74791px rgba(21, 28, 48, 0.00930055);
          color: #151c30;
        `
      : css`
          background: #1f2a48;
          color: #fff;
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
      ${({ themeMode }) => {
        return themeMode.mode === "Light"
          ? css`
              color: #151c30;
            `
          : css`
              color: #a4a4a4;
            `;
      }}
    }

    .profile__infos {
      margin-top: 2rem;
      ${({ themeMode }) => {
        return themeMode.mode === "Light"
          ? css`
              background: #f5f8ff;
            `
          : css`
              background: #151c30;
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
