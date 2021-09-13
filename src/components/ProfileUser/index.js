import { ProfileUserContainer, ImageContainer, InfoContainer } from "./styles";
import { MapPin, Link, Twitter, Briefcase } from "react-feather";
import { useState, useEffect } from "react";

export function ProfileUser({ username, themeMode, ...props }) {
  const [userInformations, setUserInformations] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAPI() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      if (data.message === "Not Found") {
        setError("User not found.");
        return;
      }
      setError("");

      const created_at = new Date(data.created_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      setUserInformations({
        name: data.name,
        username: data.login,
        bio: data.bio,
        created_at,
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

    if (username.length > 0) fetchAPI();
  }, [username]);

  return (
    <ProfileUserContainer>
      {username.length > 0 ? (
        error.length > 0 ? (
          <h1 className="invalid">{error}</h1>
        ) : (
          <>
            <ImageContainer>
              <img src={userInformations.avatar_url} alt="" />
            </ImageContainer>
            <InfoContainer>
              <div className="nameInfo">
                <div className="name">
                  <h1>{userInformations.name}</h1>
                  <span>@{userInformations.username}</span>
                </div>
                <span className="date">
                  Joined {userInformations.created_at}
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
                      <MapPin
                        color={
                          userInformations.location ? "#2778FF" : "#A4A4A4"
                        }
                        strokeWidth={1.5}
                        size={24}
                      />
                      <span>
                        {userInformations.location || "Not available"}
                      </span>
                    </div>
                    <div className="link">
                      <Link
                        color={userInformations.blog ? "#2778FF" : "#A4A4A4"}
                        strokeWidth={1.5}
                        size={24}
                      />
                      <span>{userInformations.blog || "Not available"}</span>
                    </div>
                  </div>
                  <div>
                    <div className="twitter">
                      <Twitter
                        color={userInformations.twitter ? "#2778FF" : "#A4A4A4"}
                        strokeWidth={1.5}
                        size={24}
                      />
                      <span>{userInformations.twitter || "Not available"}</span>
                    </div>
                    <div className="company">
                      <Briefcase
                        color={userInformations.company ? "#2778FF" : "#A4A4A4"}
                        strokeWidth={1.5}
                        size={24}
                      />
                      <span>{userInformations.company || "Not available"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </InfoContainer>
          </>
        )
      ) : (
        <h1 className="invalid">Search for a GitHub User!</h1>
      )}
    </ProfileUserContainer>
  );
}
