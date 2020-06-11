import React from 'react';

import NewIcon from '../../assets/new.svg';
import ProfilePhoto from '../../assets/photo.png';
import SearchIcon from '../../assets/search.svg';
import { Container, Title, Icon, Profile, ProfileContent } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Tickets</h1>
      </Title>

      <Profile>
        <Icon>
          <img src={SearchIcon} alt="" />
          <img src={NewIcon} alt="" />
          <div />
        </Icon>
        <ProfileContent>
          <span>Jones Ferdinand</span>
          <img src={ProfilePhoto} alt="" />
        </ProfileContent>
      </Profile>
    </Container>
  );
};

export default Navbar;
