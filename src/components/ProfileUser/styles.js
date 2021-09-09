import styled from "styled-components";

export const ProfileUserContainer = styled.section`
  padding: 3rem;
  width: 100%;
  display: flex;
  height: 54vh;
  margin-top: 3rem;
  border-radius: 0.5rem;
  background: #1F2A48;
  box-shadow: 0px 100px 80px rgba(12, 12, 37, 0.11), 0px 64.8148px 46.8519px rgba(12, 12, 37, 0.0835185), 0px 38.5185px 25.4815px rgba(12, 12, 37, 0.0668148), 0px 20px 13px rgba(12, 12, 37, 0.055), 0px 8.14815px 6.51852px rgba(12, 12, 37, 0.0431852), 0px 1.85185px 3.14815px rgba(12, 12, 37, 0.0264815);
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
      color: #2778FF;
      &.date {
        color: #A4A4A4;
      }
    }
  }

  & .profileInfo {
    span {
      color: #A4A4A4;
    }

    .profile__infos {
      margin-top: 2rem;
      background: #151C30;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      padding: 1rem;
      border-radius: 0.5rem;
      .repos, .followers, .following {
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