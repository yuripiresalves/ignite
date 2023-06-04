import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ContentContainer,
  ProfileContainer,
  ProfileFooter,
  ProfileHeader,
} from './styles';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { api } from '../../lib/api';
import { followersFormatter } from '../../utils/formatter';

interface Profile {
  name: string;
  login: string;
  avatar_url: string;
  bio: string | null;
  company: string | null;
  followers: number;
}

export function Profile() {
  const [profile, setProfile] = useState({} as Profile);

  useEffect(() => {
    api.get('/users/yuripiresalves').then((response) => {
      setProfile(response.data);
    });
  }, []);

  return (
    <ProfileContainer>
      <img src={profile.avatar_url} alt={profile.name} />
      <ContentContainer>
        <ProfileHeader>
          <h1>{profile.name}</h1>
          <a
            href={`https://github.com/${profile.login}`}
            target='_blank'
            rel='noreferrer'
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>

        {profile.bio ? (
          <p title={profile.bio}>{profile.bio}</p>
        ) : (
          <p>Este é o meu blog!</p>
        )}

        <ProfileFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {profile.login}
          </span>

          {profile.company && (
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile.company}
            </span>
          )}

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {followersFormatter(profile.followers)}{' '}
            {profile.followers === 1 ? 'seguidor' : 'seguidores'}
          </span>
        </ProfileFooter>
      </ContentContainer>
    </ProfileContainer>
  );
}
