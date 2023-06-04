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

export function Profile() {
  return (
    <ProfileContainer>
      <img src='https://github.com/yuripiresalves.png' alt='Yuri Alves' />
      <ContentContainer>
        <ProfileHeader>
          <h1>Yuri Alves</h1>
          <a
            href='https://github.com/yuripiresalves'
            target='_blank'
            rel='noreferrer'
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileHeader>

        <p title='oidsffsdsf'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          veniam itaque est porro id at eligendi numquam illum quidem facere,
          error alias repudiandae animi maxime! Molestiae fugit porro fugiat
          cum.
        </p>

        <ProfileFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            yuripiresalves
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            PET-Informática
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </span>
        </ProfileFooter>
      </ContentContainer>
    </ProfileContainer>
  );
}
