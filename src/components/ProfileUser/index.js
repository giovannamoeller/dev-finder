import { ProfileUserContainer, ImageContainer, InfoContainer } from './styles';
import { MapPin, Link, Twitter, Briefcase  } from 'react-feather';

export function ProfileUser() {
  return (
    <ProfileUserContainer>
      <ImageContainer>
        <img src="https://avatars.githubusercontent.com/u/47362960?v=4" alt="" />
      </ImageContainer>
      <InfoContainer>
        <div className="nameInfo">
          <div className="name">
            <h1>Giovanna Moeller</h1>
            <span>@gimoeller</span>
          </div>
          <span className="date">
            Joined 25 jan 2021.
          </span>
        </div>

        <div className="profileInfo">
          <span className="bio">This profile has no bio.</span>

          <div className="profile__infos">
            <div className="repos">
              <span>Repos</span>
              <strong>8</strong>
            </div>
            <div className="followers">
              <span>Followers</span>
              <strong>722</strong>
            </div>
            <div className="following">
              <span>Following</span>
              <strong>60</strong>
            </div>
          </div>

          <div className="personal__infos">
            <div>
              <div className="location">
                <MapPin color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>Bauru</span>
              </div>
              <div className="link">
                <Link color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>https://blog.com</span>
              </div>
            </div>
            <div>
              <div className="twitter">
                <Twitter color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>gimoeller</span>
              </div>
              <div className="company">
                <Briefcase color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>Alura</span>
              </div>
            </div>
          </div>
        </div>
      </InfoContainer>
    </ProfileUserContainer>
  )
}