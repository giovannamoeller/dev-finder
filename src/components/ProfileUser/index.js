import { ProfileUserContainer, ImageContainer, InfoContainer } from './styles';
import { MapPin, Link, Twitter, Briefcase  } from 'react-feather';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';

export function ProfileUser() {

  const [userInformations, setUserInformations] = useState({});
  const { value } = useContext(UserContext);

  useEffect(() => {

    async function fetchAPI() {
      const response = await fetch(`https://api.github.com/users/${value}`);
      const data = await response.json();
  
      setUserInformations({
        name: data.name,
        username: data.userName,
        bio: data.bio,
        avatar_url: data.avatar_url,
        login: data.login,
        location: data.location,
        twitter: data.twitter_username,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        blog: data.blog,
        company: data.company,
      });
    }

    fetchAPI();

  }, [value]);

  return (
    <ProfileUserContainer>
      <ImageContainer>
        <img src={userInformations.avatar_url} alt="" />
      </ImageContainer>
      <InfoContainer>
        <div className="nameInfo">
          <div className="name">
            <h1>{userInformations.name}</h1>
            <span>{userInformations.username}</span>
          </div>
          <span className="date">
            Joined 25 jan 2021.
          </span>
        </div>

        <div className="profileInfo">
          <span className="bio">{userInformations.bio}</span>

          <div className="profile__infos">
            <div className="repos">
              <span>Repos</span>
              <strong>{userInformations.repos}</strong>
            </div>
            <div className="followers">
              <span>Followers</span>
              <strong>{userInformations.followers}</strong>
            </div>
            <div className="following">
              <span>Following</span>
              <strong>{userInformations.following}</strong>
            </div>
          </div>

          <div className="personal__infos">
            <div>
              <div className="location">
                <MapPin color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>{userInformations.location || 'No location available.'}</span>
              </div>
              <div className="link">
                <Link color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>{userInformations.blog || 'No blog.'}</span>
              </div>
            </div>
            <div>
              <div className="twitter">
                <Twitter color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>{userInformations.twitter || 'No twitter.'}</span>
              </div>
              <div className="company">
                <Briefcase color="#2778FF" strokeWidth={1.5} size={24}/>
                <span>{userInformations.company || 'No company.'}</span>
              </div>
            </div>
          </div>
        </div>
      </InfoContainer>
    </ProfileUserContainer>
  )
}