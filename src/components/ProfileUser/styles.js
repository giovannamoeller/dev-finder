import styled, { css } from "styled-components";

export const ProfileUserContainer = styled.section`
  padding: 2rem;

  @media screen and (max-width: 520px) {
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
    span {
      font-size: 85%;
    }
    .search-user {
      font-size: 110%;
    }
  }

  display: flex;
  width: 100%;
  margin-top: 3rem;
  border-radius: 0.5rem;

  ${({ theme }) => {
    return css`
      background: ${theme.backgroundContainer};
      box-shadow: ${theme.boxShadow};
      color: ${theme.titleColor};
    `;
  }}
`;

export const ImageContainer = styled.div`
  max-width: 20%;
  height: 100%;
  margin-right: 3rem;

  @media screen and (max-width: 520px) {
    display: none;
  }

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 80%;

  @media screen and (max-width: 520px) {
    width: 100%;
  }

  & .nameInfo {
    display: flex;

    @media screen and (max-width: 520px) {
      flex-direction: column;
      align-items: flex-start;
      span.date {
        margin-top: 0.5rem;
      }
    }

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
      ${({ theme }) => {
        return css`
          color: ${theme.defaultColor};
        `;
      }}
    }

    .profile__infos {
      width: 100%;
      margin-top: 2rem;
      ${({ theme }) => {
        return css`
          background: ${theme.profileBackground};
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
          margin-top: 1rem;
        }
      }
      
      @media screen and (max-width: 520px) {
        strong {
          font-size: 1.2rem;
        }
        span {
          font-size: 80%;
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

      @media screen and (max-width: 520px) {
        margin-top: 2rem;
        display: block;
        
        div > div {
          margin-bottom: 1rem;
        }
      }

    }
  }
`;
